import { Form, FormFieldInfo, FormFieldTypes } from "../../Components/Form/Form";
import { APIBaseURL } from "../../config";
import { supabase } from "../../supabase";
import "./SubmitStaffApplicationPage.css"

export const staffApplicationFormFields: Array<FormFieldInfo> = [
  {
    type: FormFieldTypes.discordUserID,
    key: "discordUserID",
    title: "Your discord user id",
    isRequired: true,
    placeHolder: "Ex: 123456789012345678"
  },
  {
    type: FormFieldTypes.textLine,
    key: "discordUsername",
    title: "Your discord username",
    isRequired: true,
    defaultValue: "",
    placeHolder: "Ex: CleverYeti"
  },
  {
    type: FormFieldTypes.textArea,
    key: "reasonToApply",
    title: "Why do you want to become mod on this server?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "reasonToBeGood",
    title: "Why do you think you'd be a good morderator for this server?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "thoughtsOnMistik",
    title: "What are your thoughts on Mistik?",
    defaultValue: "",
    textAreaHeight: 20
  },
  {
    type: FormFieldTypes.textArea,
    key: "experience",
    title: "Do you have any experience moderating other discord servers?",
    defaultValue: "",
  },
]

export function SubmitStaffApplicationPage() {
  return (
    <div id="submit-staff-application-page">
      <div className="banner"></div>
      <div className="title">Hazycord Staff Application Submission</div>
      <Form
        submitButtonText="Submit Application"
        fields={staffApplicationFormFields}
        submitCallback={async (values, errorCallback, successCallback) => {
          try {
            const response = await fetch(`${APIBaseURL}/submit-staff-application`, {
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