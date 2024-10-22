"use client";
import { useFormik } from "formik";
import { formikInitialValuesforP2P } from "@repo/validation/formik/p2p";
import { p2pFormSchema } from "@repo/validation/schema/p2p";
import React from "react";
import { useP2PStore } from "@/store/p2p";
const Transfer = () => {
  const { sendMoneyAction, loading: sendMoneyLoading } = useP2PStore(
    (store) => store
  );
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: formikInitialValuesforP2P,
    validationSchema: p2pFormSchema,
    onSubmit: () => {
      try {
        sendMoneyAction(Number(values.amount), values.email);
      } catch (error: any) {
        console.log("error:", error);
      }
    },
  });
  return (
    <div className="flex flex-col items-center justify-center px-2 py-8 bg-violet-100 flex-grow h-screen">
      <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 rounded-xl border-spacing-10 shadow-md border bg-white">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Send Money
          </h1>
          <form className="space-y-4 md:space-y-6 bg" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                name="email"
                className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm  block w-full p-2.5 "
                placeholder="name@email.com"
              />
              {touched.email && errors.email && errors.email ? (
                <p className="text-sm font-normal text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>{/* SecureP@ss123 */}</div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Amount
              </label>
              <input
                value={values.amount}
                onChange={handleChange}
                name="amount"
                type="number"
                className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm  block w-full p-2.5 "
                placeholder="00000"
              />
              {touched.amount && errors.amount && errors.amount ? (
                <p className="text-sm font-normal text-red-600">
                  {errors.amount}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
