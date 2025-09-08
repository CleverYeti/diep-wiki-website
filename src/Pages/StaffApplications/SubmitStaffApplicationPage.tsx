import { Form, FormFieldInfo, FormFieldTypes } from "../../Components/Form/Form";
import { APIBaseURL } from "../../config";
import { supabase } from "../../supabase";
import "./SubmitStaffApplicationPage.css"



export function SubmitApplicationPage({
  title,
  fields,
  formKey
}: {
  title: string,
  fields: Array<FormFieldInfo>
  formKey: string // ex: staff-applications
}) {
  return (
    <div id="submit-staff-application-page">
      <div className="banner"></div>
      <div className="title">{title}</div>
      <Form
        submitButtonText="Submit Application"
        fields={fields}
        submitCallback={async (values, errorCallback, successCallback) => {
          try {
            const response = await fetch(`${APIBaseURL}/submit-${formKey}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values)
            });
            if (!response.ok) return errorCallback();
          } catch (error) {
            errorCallback()
            return;
          }
          successCallback();
        }}
      />
    </div>
  )
}