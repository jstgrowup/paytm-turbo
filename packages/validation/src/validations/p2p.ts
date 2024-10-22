import * as yup from "yup";
export const p2pFormSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  amount: yup.string().required("Please enter an amount"),
});
