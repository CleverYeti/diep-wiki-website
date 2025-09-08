import { useParams } from "react-router-dom"
import { Page404 } from "../Page404";
import { useEffect, useState } from "react";
import { SupabaseApplicationRow } from "./StaffApplicationListPage";
import { supabase } from "../../supabase";
import { FormView } from "../../Components/Form/FormView";
import "./SubmitStaffApplicationPage"
import { APIBaseURL } from "../../config";
import { FormFieldInfo } from "../../Components/Form/Form";

export function ViewApplicationPage({
  formKey,
  title,
  fields
}: {
  formKey: string // ex: staff-applications
  title: string,
  fields: Array<FormFieldInfo>
}) {
  let { applicationID: strApplicationID } = useParams()
  const applicationID = parseInt(strApplicationID ?? "");
  if (isNaN(applicationID)) return <Page404/>;

  const [application, setApplication] = useState<SupabaseApplicationRow|"loading"|"error"|"invalidPassword"|"unauthenticated"|"submittingPassword">("loading")
  const [password, setPassword] = useState<string>(() => localStorage.getItem(formKey + "-password") ?? "")
  const [refreshKey, setRefreshKey] = useState(0)
  const [passwordInputContent, setPasswordInputContent] = useState("")
  useEffect(() => localStorage.setItem(formKey + "-password", password), [password])
  useEffect(() => {
    if (password == "" || password == null) return setApplication("unauthenticated");
    let ignore = false;
    ;(async () => {
      try {
        const response = await fetch(`${APIBaseURL}/get-${formKey}-single/?password=${encodeURIComponent(password)}&id=${applicationID}`);
        if (ignore) return
        if (response.status == 401) {
          if (application == "submittingPassword") {
            setApplication("invalidPassword")
            console.log("invalid")
          } else {
            setApplication("unauthenticated")
          };
          return
        }
        if (!response.ok) throw new Error("not ok");

        const data = await response.json()
        if (ignore) return
        setApplication(data)
      } catch (error) {
        setApplication("error")
      }
    })()
    return () => {ignore = true}
  }, [password, refreshKey, applicationID])
  return (
    <div id="submit-staff-application-page">
      <div className="title">{title} #{applicationID}</div>
      {(() => {
        if (application == "loading") return (
          <div className="loading-text">Loading...</div>
        );
        if (application == "error") return (
          <div className="error-text">An error occured</div>
        )
        if (application == "submittingPassword") return (
          <div className="loading-text">Loading...</div>
        )
        if (application == "invalidPassword" || application == "unauthenticated") return (
          <div className="form" style={{padding: "0 1rem", maxWidth: "30rem", margin: "0 auto"}}>
            <div className="form-field">
              <div className="field-title">Enter password: {(application == "invalidPassword") && "- Invalid password, try again"}</div>
              <div className="field-row">
                <input type="text" placeholder="Password" value={passwordInputContent} onChange={(event) => setPasswordInputContent(event.target.value)}/>
              </div>
            </div>
            <button className="submit" disabled={passwordInputContent == ""} onClick={() => {
              if (passwordInputContent == "") return;
              setPassword(passwordInputContent);
              setApplication("submittingPassword")
              setRefreshKey(refreshKey + 1)
            }}>Log in</button>
          </div>
        )
        return (
          <FormView
            fields={fields}
            values={application.submission_content}
          />
        )
      })()}
    </div>
  )
}