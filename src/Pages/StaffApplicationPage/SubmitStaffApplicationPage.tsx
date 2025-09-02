import { Form, FormFieldInfo, FormFieldTypes } from "../../Components/Form/Form";
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
    key: "experience",
    title: "Do you have any experience moderating other discord servers?",
    defaultValue: "",
  },
]

export function SubmitStaffApplicationPage() {
  return (
    <div id="submit-staff-application-page">
      <div className="banner"></div>
      <div className="title">Hazycord Staff Applications</div>
      <Form
        submitButtonText="Submit Application"
        fields={staffApplicationFormFields}
        submitCallback={async (values, errorCallback, successCallback) => {
          console.log("sending", values)

          const { error } = await supabase
            .from("staff submissions")
            .insert({
              submission_content: values
            })

          if (error) return errorCallback()
          successCallback();
        }}
      />
    </div>
  )
}