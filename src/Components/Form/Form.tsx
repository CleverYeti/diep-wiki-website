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

type FormFieldValue = number | string | Array<string|null> | boolean | null

type FormFieldInfo = {
  key: string
  title: string,
} & (
  {
    type: FormFieldTypes.textLine,
    defaultValue: string
    isRequired?: boolean
    isList?: boolean,
    placeHolder?: string,
  } | {
    type: FormFieldTypes.textArea,
    defaultValue: string
    textAreaHeight?: number,
    isRequired?: boolean
    placeHolder?: string,
  } | {
    type: FormFieldTypes.discordUserID
    isRequired?: boolean
    isList?: boolean,
    placeHolder?: string,
  } | {
    type: FormFieldTypes.url
    isRequired?: boolean
    isList?: boolean,
    placeHolder?: string,
  } | {
    type: FormFieldTypes.image
    isRequired?: boolean
    isList?: boolean,
  } | {
    type: FormFieldTypes.boolean,
    defaultValue: boolean
  } | {
    type: FormFieldTypes.multipleChoices,
    defaultValue: string,
    options: Array<{
      key: string,
      name: string,
    }>,
    canPickMultiple: boolean,
  }
)
function getFieldDefaultValue(fieldInfo: FormFieldInfo) {
  switch (fieldInfo.type) {
    case FormFieldTypes.textLine:
      return fieldInfo.defaultValue
    case FormFieldTypes.textArea:
      return fieldInfo.defaultValue
    case FormFieldTypes.discordUserID:
      return ""
    case FormFieldTypes.url:
      return ""
    case FormFieldTypes.image:
      return null
    case FormFieldTypes.boolean:
      return fieldInfo.defaultValue
    case FormFieldTypes.multipleChoices:
      return fieldInfo.defaultValue
  }
}
function getFieldListEntryDefaultValue(fieldInfo: FormFieldInfo) {
  switch (fieldInfo.type) {
    case FormFieldTypes.textLine:
      return ""
    case FormFieldTypes.discordUserID:
      return ""
    case FormFieldTypes.url:
      return ""
    case FormFieldTypes.image:
      return null
  }
  throw new Error("type is incompatible with list")
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
    Object.fromEntries(fields.map(field => [field.key, getFieldDefaultValue(field)]))
  ))

  if (Object.keys(values).join(",") != fields.map(field => field.key).join(",")) {
    setValues(Object.fromEntries(fields.map(field => [field.key, getFieldDefaultValue(field)])));
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
        if ((field as any).isList) {
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
                setValues({
                  ...values,
                  [field.key]: [...values[field.key], getFieldListEntryDefaultValue(field)]
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
    case FormFieldTypes.multipleChoices:
      return (
        <select
          className="multiple-choice-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          {value.multipleChoiceChoices?.map(({key, name} : {key: string, name: string}) => (
            <option value={key}>{name}</option>
          ))}
        </select>
      )
    case FormFieldTypes.boolean:
      return (
        <input
          type="checkbox"
          checked={value}
          onChange={(event) => setValue(event.target.checked)}
        />
      )
    case FormFieldTypes.image:
      throw new Error("image inputs not supported yet");
    default:
      return <></>
  }
}