"use client";
import React from "react";
import { useFormik } from "formik";
import { formikInitialValuesforP2P } from "@repo/validation/formik/p2p";
import { p2pFormSchema } from "@repo/validation/schema/p2p";
import { useP2PStore } from "@/store/p2p";
import { showErrorToast, showSuccessToast } from "@repo/ui/toast";
import { Button } from "@repo/ui/button";
import InputField from "./p2pFormInput";
const P2PForm = () => {
  const {
    sendMoneyAction,
    loading: sendMoneyLoading,
    successMessage,
  } = useP2PStore((store) => store);
  const { handleChange, handleSubmit, values, errors, touched, resetForm } =
    useFormik({
      initialValues: formikInitialValuesforP2P,
      validationSchema: p2pFormSchema,
      onSubmit: async () => {
        try {
          await sendMoneyAction(Number(values.amount), values.email);
          showSuccessToast(successMessage);
          resetForm();
        } catch (error: any) {
          showErrorToast(error.message ?? "Something went wrong");
          resetForm();
        }
      },
    });
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center px-2 py-8 bg-violet-100 flex-grow h-screen">
        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 rounded-xl border-spacing-10 shadow-md border bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Send Money
            </h1>
            <form className="space-y-4 md:space-y-6 bg" onSubmit={handleSubmit}>
              <InputField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="name@email.com"
                error={errors.email}
                touched={touched.email}
              />

              <div>{/* SecureP@ss123 */}</div>
              <InputField
                label="Amount"
                name="amount"
                type="number"
                value={values.amount}
                onChange={handleChange}
                placeholder="00000"
                error={errors.amount}
                touched={touched.amount}
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                loading={sendMoneyLoading}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2PForm;
