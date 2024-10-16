import * as yup from "yup";
export const transferFormSchema = yup.object({
  amount: yup.string().required("Please enter an amount"),
  bank: yup.string().required("Please enter the bank provider"),
});
