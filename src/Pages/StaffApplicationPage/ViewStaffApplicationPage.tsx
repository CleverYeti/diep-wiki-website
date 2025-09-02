import { useParams } from "react-router-dom"
import { Page404 } from "../Page404";
import { useEffect, useState } from "react";
import { SupabaseStaffApplicationRow } from "./StaffApplicationListPage";
import { supabase } from "../../supabase";
import { FormView } from "../../Components/Form/FormView";
import { staffApplicationFormFields } from "./SubmitStaffApplicationPage";
import "./SubmitStaffApplicationPage"

export function ViewStaffApplicationPage() {
  let { applicationID: strApplicationID } = useParams()
  const applicationID = parseInt(strApplicationID ?? "");
  if (isNaN(applicationID)) return <Page404/>;

  const [application, setApplication] = useState<SupabaseStaffApplicationRow|null|"error">(null)
  useEffect(() => {
    let ignore = false;
    ;(async () => {
      const { data, error } = await supabase
        .from("staff submissions")
        .select("*")
        .eq("id", applicationID)
        .maybeSingle();

      if (ignore) return
      if (error || data == null) return setApplication("error");
      setApplication(data)
    })()
    return () => {ignore = true}
  }, [])

  return (
    <div id="submit-staff-application-page">
      <div className="title">Staff Application #{applicationID}</div>
      {application == null ? (
        <div className="loading-text">Loading...</div>
      ) : (application == "error" ? (
        <div className="error-text">An error occured</div>
      ) : (
        <FormView
          fields={staffApplicationFormFields}
          values={application.submission_content}
        />
      ))}
    </div>
  )
}