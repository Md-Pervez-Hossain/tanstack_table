
import * as yup from "yup"
export const FormValidation = yup.object({
  firstName: yup.string().required()
})