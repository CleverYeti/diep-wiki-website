import { FormField, FormFieldInfo, FormValues } from "./Form";

export function FormView({
  fields,
  values
}: {
  fields: Array<FormFieldInfo>
  values: FormValues
}) {
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
                    setValue={() => {}}
                    isReadOnly={true}
                  />
                </div>
              ))}
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
                setValue={() => {}}
                isReadOnly={true}
              />
            </div>
          </div>
        </>
      })}
    </div>
  )
}