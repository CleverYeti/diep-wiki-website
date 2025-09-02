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

export type FormFieldValue = number | string | Array<string|null> | boolean | null
export type FormValues = Record<string, FormFieldValue>

export type FormFieldInfo = {
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
      if (fieldInfo.isList) return []
      return fieldInfo.defaultValue
    case FormFieldTypes.textArea:
      return fieldInfo.defaultValue
    case FormFieldTypes.discordUserID:
      if (fieldInfo.isList) return []
      return ""
    case FormFieldTypes.url:
      if (fieldInfo.isList) return []
      return ""
    case FormFieldTypes.image:
      if (fieldInfo.isList) return []
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
  submitCallback: (values: FormValues, errorCallback: () => void, successCallback: () => void) => void
}) {
  const [submissionStatus, setSubmissionStatus] = useState<"none"|"submitting"|"error"|"submitted">("none")

  const [values, setValues] = useState<FormValues>(() => (
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
          if (!Array.isArray(values[field.key])) throw new Error("list-type field value isnt an array")
          let entries = values[field.key] as Array<string|null>
          return <>
            <div className="form-field" key={field.key}>
              <div className="field-title">{field.title}</div>
              {entries.map((entry: any, index: number) => (
                <div className="field-row">
                  <FormField
                    key={index}
                    fieldInfo={field}
                    value={entry}
                    setValue={(newValue: string) => {
                      const newEntries = [...entries]
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
                  [field.key]: [...entries, getFieldListEntryDefaultValue(field)]
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

export function FormField({
  fieldInfo,
  value,
  setValue,
  isReadOnly
}: {
  fieldInfo: FormFieldInfo,
  value: any,
  setValue: (newValue: any) => void,
  isReadOnly?: boolean
}) {
  switch (fieldInfo.type) {
    case FormFieldTypes.textLine:
      return (
        <input
          readOnly={isReadOnly}
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
          readOnly={isReadOnly}
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
          readOnly={isReadOnly}
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
          readOnly={isReadOnly}
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
          disabled={isReadOnly}
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
          readOnly={isReadOnly}
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