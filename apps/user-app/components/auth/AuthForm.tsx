"use client";
import { useState } from "react";
import { useFormik } from "formik";
import { showErrorToast, showSuccessToast } from "@repo/ui/toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PasswordInput from "./Password-input";
import { authFormSchema } from "@repo/validation/schema/auth";
import { formikInitialValuesforAuth } from "@repo/validation/formik/auth";
import { Button } from "@repo/ui/button";
export const AuthForm = ({
  signIn,
}: {
  signIn: (type: string, options: any) => void;
}) => {
  const { status } = useSession();
  const [login, setlogin] = useState<boolean>(false);
  const router = useRouter();
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: formikInitialValuesforAuth,
    validationSchema: authFormSchema,
    onSubmit: async () => {
      try {
        const result: any = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
          callbackUrl: "/",
        });
        if (result?.ok) {
          if (login) {
            showSuccessToast("Successfully Signed in!");
          } else {
            showSuccessToast("Signup Sucessfull!");
          }
          router.push("/");
        } else {
          showErrorToast(
            result?.error || "Wrong credentials, please try again"
          );
        }
      } catch (error: any) {
        showErrorToast("An unexpected error occurred. Please try again.");
      }
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 py-8 bg-violet-100 flex-grow">
        <div className="w-full  md:mt-0 sm:max-w-md xl:p-0 rounded-xl border-spacing-10 shadow-md border bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6 bg" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm  block w-full p-2.5 "
                  placeholder="name@company.com"
                />
                {touched.email && errors.email && errors.email ? (
                  <p className="text-sm font-normal text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                {/* SecureP@ss123 */}
                <PasswordInput
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  error={touched.password ? errors.password : undefined}
                />
              </div>
              {!login && (
                <PasswordInput
                  value={values.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  label="Confirm Password"
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                />
              )}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ">
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <img
                      className="h-5 w-5"
                      src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <img
                      className="h-6 w-6"
                      src="https://www.svgrepo.com/show/506498/google.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300"
                  />
                </div>
                <div className="ml-3 text-sm  w-full flex text-gray-500 gap-1">
                  <p className="font-light ">I accept the </p>
                  <p className="font-medium hover:underline">
                    Terms and Conditions
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center "
              >
                {login ? "Login" : "Signup"}
              </button>
              <div className="text-sm font-light text-gray-500 flex gap-2">
                {login ? " Dont have an account?" : " Already have an account?"}
                <p
                  onClick={() => setlogin(!login)}
                  className="font-medium text-primary-600 hover:underline cursor-pointer"
                >
                  {login ? "Signup" : "Login"}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
