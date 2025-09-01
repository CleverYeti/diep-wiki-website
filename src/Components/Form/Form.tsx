import { useEffect, useState } from "react"

export enum FormFieldTypes {
  textLine,
  textArea,
  discordUserID,
  url,
  image,

}

interface FormFieldInfo {
  type: FormFieldTypes,
  key: string
  title: string,
  isList?: boolean,
  isRequired?: boolean
  defaultValue: any,
  defaultListEntryValue?: any,

  textAreaHeight?: number,
}

export function Form({
  fields,
  sendCallback
}: {
  fields: Array<FormFieldInfo>
  sendCallback: (values: Array<any>) => void
}) {
  const [values, setValues] = useState<Record<string, any>>(() => (
    Object.fromEntries(fields.map(field => [field.key, field.defaultValue]))
  ))

  if (Object.keys(values).join(",") != fields.map(field => field.key).join(",")) {
    setValues(Object.fromEntries(fields.map(field => [field.key, field.defaultValue])));
    return <></>
  }


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
        </>
      })}
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
    case FormFieldTypes.textArea:
    case FormFieldTypes.discordUserID:
    case FormFieldTypes.url:
    case FormFieldTypes.image:
    default:
      return <></>
  }
}