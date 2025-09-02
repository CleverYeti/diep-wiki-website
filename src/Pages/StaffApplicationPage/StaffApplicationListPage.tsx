import { useEffect, useState } from "react";
import { Form, FormFieldTypes, FormValues } from "../../Components/Form/Form";
import { supabase } from "../../supabase";
import "./StaffApplicationListPage.css"
import { Link } from "react-router-dom";

export interface SupabaseStaffApplicationRow {
  id: number,
  created_at: string,
  submission_content: FormValues
}

export function StaffApplicationListPage() {
  const [applications, setApplications] = useState<Array<SupabaseStaffApplicationRow>|null|"error">(null)
  useEffect(() => {
    let ignore = false;
    ;(async () => {
      const { data, error } = await supabase
        .from("staff submissions")
        .select("*");

      if (ignore) return
      if (error) return setApplications("error");
      setApplications(data)
    })()
    return () => {ignore = true}
  }, [])
  return (
    <div id="staff-application-list-page">
      <div className="title">Hazycord Staff Applications</div>
      {applications == null ? (
        <div className="loading-text">Loading...</div>
      ) : (applications == "error" ? (
        <div className="error-text">An error occured</div>
      ) : (
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
            <Link className="entry-row" to={`/hazycord/staff-application/${application.id}`}>
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
      ))}
    </div>
  )
}