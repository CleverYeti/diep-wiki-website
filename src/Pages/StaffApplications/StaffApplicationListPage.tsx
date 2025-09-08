import { useEffect, useState } from "react";
import { Form, FormFieldTypes, FormValues } from "../../Components/Form/Form";
import { supabase } from "../../supabase";
import "./StaffApplicationListPage.css"
import { Link } from "react-router-dom";
import { APIBaseURL } from "../../config";

export interface SupabaseApplicationRow {
  id: number,
  created_at: string,
  submission_content: FormValues
}

export function ApplicationListPage({
  formKey,
  title
}: {
  formKey: string // ex: staff-applications
  title: string,
}) {
  const [applications, setApplications] = useState<Array<SupabaseApplicationRow>|"loading"|"error"|"invalidPassword"|"unauthenticated"|"submittingPassword">("loading")
  const [password, setPassword] = useState<string>(() => localStorage.getItem(formKey + "-password") ?? "")
  const [refreshKey, setRefreshKey] = useState(0)
  const [passwordInputContent, setPasswordInputContent] = useState("")
  useEffect(() => localStorage.setItem(formKey + "-password", password), [password])
  useEffect(() => {
    if (password == "" || password == null) return setApplications("unauthenticated");
    let ignore = false;
    ;(async () => {
      try {
        const response = await fetch(`${APIBaseURL}/get-${formKey}/?password=${encodeURIComponent(password)}`);
        if (ignore) return
        if (response.status == 401) {
          if (applications == "submittingPassword") {
            setApplications("invalidPassword")
            console.log("invalid")
          } else {
            setApplications("unauthenticated")
          };
          return
        }
        if (!response.ok) throw new Error("not ok");
        const data = await response.json()
        if (ignore) return
        setApplications(data)
      } catch (error) {
        setApplications("error")
      }
    })()
    return () => {ignore = true}
  }, [password, refreshKey])
  return (
    <div id="staff-application-list-page">
      <div className="title">{title}</div>
      {(() => {
        if (applications == "loading") return (
          <div className="loading-text">Loading...</div>
        );
        if (applications == "error") return (
          <div className="error-text">An error occured</div>
        )
        if (applications == "submittingPassword") return (
          <div className="loading-text">Loading...</div>
        )
        if (applications == "invalidPassword" || applications == "unauthenticated") return (
          <div className="form" style={{padding: "0 1rem", maxWidth: "30rem", margin: "0 auto"}}>
            <div className="form-field">
              <div className="field-title">Enter password: {(applications == "invalidPassword") && "- Invalid password, try again"}</div>
              <div className="field-row">
                <input type="text" placeholder="Password" value={passwordInputContent} onChange={(event) => setPasswordInputContent(event.target.value)}/>
              </div>
            </div>
            <button className="submit" disabled={passwordInputContent == ""} onClick={() => {
              if (passwordInputContent == "") return;
              setPassword(passwordInputContent);
              setApplications("submittingPassword")
              setRefreshKey(refreshKey + 1)
            }}>Log in</button>
          </div>
        )
        return (
          <div className="entries-list">
            <div className="header-row">
              <div className="id-column">#</div>
              <div className="user-column">
                <div className="username">User</div>
              </div>
              <div className="timestamp-column">
                Time of Submission
              </div>
            </div>
            {applications.map(application => (
              <Link className="entry-row" to={`/diepverse/${formKey}/${application.id}`}>
                <div className="id-column">{application.id}</div>
                <div className="user-column">
                  <div className="username">{application.submission_content["discordUsername"]}</div>
                  <div className="user-id">({application.submission_content["discordUserID"]})</div>
                </div>
                <div className="timestamp-column">
                  {new Date(application.created_at).toLocaleString()}
                </div>
              </Link>
            ))}
          </div>
        )
      })()}
    </div>
  )
}