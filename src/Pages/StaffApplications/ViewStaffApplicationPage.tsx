import { useParams } from "react-router-dom"
import { Page404 } from "../Page404";
import { useEffect, useState } from "react";
import { SupabaseStaffApplicationRow } from "./StaffApplicationListPage";
import { supabase } from "../../supabase";
import { FormView } from "../../Components/Form/FormView";
import { staffApplicationFormFields } from "./SubmitStaffApplicationPage";
import "./SubmitStaffApplicationPage"
import { APIBaseURL } from "../../config";

export function ViewStaffApplicationPage() {
  let { applicationID: strApplicationID } = useParams()
  const applicationID = parseInt(strApplicationID ?? "");
  if (isNaN(applicationID)) return <Page404/>;

  const [application, setApplication] = useState<SupabaseStaffApplicationRow|"loading"|"error"|"invalidPassword"|"unauthenticated"|"submittingPassword">("loading")
  const [password, setPassword] = useState<string>(() => localStorage.getItem("staff-application-password") ?? "")
  const [refreshKey, setRefreshKey] = useState(0)
  const [passwordInputContent, setPasswordInputContent] = useState("")
  useEffect(() => localStorage.setItem("staff-application-password", password), [password])
  useEffect(() => {
    if (password == "" || password == null) return setApplication("unauthenticated");
    let ignore = false;
    ;(async () => {
      try {
        const response = await fetch(`${APIBaseURL}/get-staff-application/?password=${encodeURIComponent(password)}&id=${applicationID}`);
        if (ignore) return
        if (!response.ok) throw new Error("not ok");
        const data = await response.json()
        if (ignore) return
        setApplication(data)
      } catch (error) {
        setApplication(application)
        if (application == "submittingPassword") {
          setApplication("invalidPassword")
          console.log("invalid")
        } else {
          setApplication("unauthenticated")
        };
      }
    })()
    return () => {ignore = true}
  }, [password, refreshKey])
  return (
    <div id="submit-staff-application-page">
      <div className="title">Staff Application #{applicationID}</div>
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
              <div className="field-title">Enter staff password: {(application == "invalidPassword") && "- Invalid password, try again"}</div>
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
            fields={staffApplicationFormFields}
            values={application.submission_content}
          />
        )
      })()}
    </div>
  )
}