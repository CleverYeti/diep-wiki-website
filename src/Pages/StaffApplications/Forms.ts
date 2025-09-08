import { FormFieldInfo, FormFieldTypes } from "../../Components/Form/Form";

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
    key: "experience",
    title: "Do you have any experience moderating a server? If so, tell us about it.",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "dramaResponse",
    title: "How would you defuse a situation that will cause drama?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "toxicityResponse",
    title: "What would you do if members were being toxic?",
    defaultValue: "",
    isRequired: true
  },
]

export const worldRecordTeamApplicationFormFields: Array<FormFieldInfo> = [
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
    key: "experience",
    title: "Do you have any prior experience with world records?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "proofRequired",
    title: "How much proof do you think is needed for a valid WR? Explain why.",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "scriptingHelpers",
    title: "What would you do if the scorer has players protecting/hunting with scripts?, Explain what you would do in different situations",
    defaultValue: "",
    isRequired: true
  },
]

export const eventTeamApplicationFormFields: Array<FormFieldInfo> = [
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
    key: "experience",
    title: "What prior experience do you have with creating events?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "whatToDoWithCheaters",
    title: "How would you handle someone being accused of cheating in an event?",
    defaultValue: "",
    isRequired: true
  },
  {
    type: FormFieldTypes.textArea,
    key: "howToPrepare",
    title: "How would you prepare to run events?",
    defaultValue: "",
    isRequired: true
  },
]