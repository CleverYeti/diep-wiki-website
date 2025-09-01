import { CSSProperties, useEffect, useState } from "react"
import "./Form.css"

export enum FormFieldTypes {
  textLine,
  textArea,
  discordUserID,
  url,
  image,
  boolean,
  multipleChoices
}

interface FormFieldInfo {
  type: FormFieldTypes,
  key: string
  title: string,
  isList?: boolean,
  isRequired?: boolean
  defaultValue: any,
  placeHolder?: string,

  defaultListEntryValue?: any,
  textAreaHeight?: number,
  multipleChoiceChoices?: Array<{
    key: string,
    name: string,
  }>
  multipleChoiceCanPickMultiple?: boolean,
}

export function Form({
  fields,
  submitButtonText = "Submit",
  submitCallback
}: {
  fields: Array<FormFieldInfo>
  submitButtonText?: string,
  submitCallback: (values: Record<string, any>, errorCallback: () => void, successCallback: () => void) => void
}) {
  const [submissionStatus, setSubmissionStatus] = useState<"none"|"submitting"|"error"|"submitted">("none")

  const [values, setValues] = useState<Record<string, any>>(() => (
    Object.fromEntries(fields.map(field => [field.key, field.defaultValue]))
  ))

  if (Object.keys(values).join(",") != fields.map(field => field.key).join(",")) {
    setValues(Object.fromEntries(fields.map(field => [field.key, field.defaultValue])));
    return <></>
  }

  if (submissionStatus == "submitted") return (
    <div className="form">
      Form submitted, you can close this tab now
    </div>
  )

  return (
    <div className="form">
      {fields.map(field => {
        if (field.isList) {
          return <>
            <div className="form-field" key={field.key}>
              <div className="field-title">{field.title}</div>
              {values[field.key].map((entry: any, index: number) => (
                <div className="field-row">
                  <FormField
                    key={index}
                    fieldInfo={field}
                    value={entry}
                    setValue={(newValue: string) => {
                      const newEntries = [...values[field.key]]
                      newEntries[index] = newValue;
                      setValues({
                        ...values,
                        [field.key]: newEntries
                      })
                    }}
                  />
                </div>
              ))}
              <button className="add-entry" onClick={() => {
                if (field.defaultListEntryValue == null) throw new Error("cannot add to list when field.defaultListEntryValue is null")
                setValues({
                  ...values,
                  [field.key]: [...values[field.key], field.defaultListEntryValue]
                })
              }}>Add Entry</button>
            </div>
          </>
        }
        return <>
          <div className="form-field" key={field.key}>
            <div className="field-title">{field.title}</div>
            <div className="field-row">
              <FormField
                key={field.key}
                fieldInfo={field}
                value={values[field.key]}
                setValue={(newValue: string) => {
                  setValues({
                    ...values,
                    [field.key]: newValue
                  })
                }}
              />
            </div>
          </div>
        </>
      })}

      <button className="submit" onClick={() => {
        if (submissionStatus == "none" || submissionStatus == "error") {
          setSubmissionStatus("submitting")
          submitCallback(values, () => setSubmissionStatus("error"), () => setSubmissionStatus("submitted"));
        }
      }}>
        {submissionStatus == "none" && submitButtonText}
        {submissionStatus == "error" && submitButtonText + " - An Error Occured"}
        {submissionStatus == "submitting" && "Submitting..."}
      </button>
    </div>
  )
}

function FormField({
  fieldInfo,
  value,
  setValue
}: {
  fieldInfo: FormFieldInfo,
  value: any,
  setValue: (newValue: any) => void
}) {
  switch (fieldInfo.type) {
    case FormFieldTypes.textLine:
      return (
        <input
          type="text"
          className="text-line-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={fieldInfo.placeHolder ?? ""}
        />
      )
    case FormFieldTypes.textArea:
      return (
        <textarea
          className="text-area-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={{["--height" as any]: (fieldInfo.textAreaHeight ?? 6) + "rem"}}
          placeholder={fieldInfo.placeHolder ?? ""}
        />
      )
    case FormFieldTypes.discordUserID:
      return (
        <input
          type="text"
          className="discord-user-id-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={fieldInfo.placeHolder ?? ""}
        />
      )
    case FormFieldTypes.url:
      return (
        <input
          type="text"
          className="url-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={fieldInfo.placeHolder ?? ""}
        />
      )
    case FormFieldTypes.image:
      throw new Error("image inputs not supported yet");
    default:
      return <></>
  }
}