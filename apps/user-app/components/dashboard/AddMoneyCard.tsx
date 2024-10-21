"use client";
import React from "react";
import { Button } from "@repo/ui/button";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";
import { PlusCircle } from "lucide-react";
import { useTransferStore } from "@/store/transfer";
import { useFormik } from "formik";
import { transferFormSchema } from "@repo/validation/schema/transfer";
import { showErrorToast, showSuccessToast } from "@repo/ui/toast";
import { formikInitialValuesforTransfer } from "@repo/validation/formik/transfer";
import { useBalanceStore } from "@/store/balance";
import { COMMON_CONSTANTS } from "@repo/utils/constants";
import { OnRampStatus } from "@repo/utils/enums";
const AddMoneyCard = () => {
  const {
    createTransactionStoreAction,
    getAllTransactionsAction,
    transactions,
  } = useTransferStore((store) => store);
  const getWalletBalanceAction = useBalanceStore(
    (store) => store.getWalletBalanceAction
  );

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: formikInitialValuesforTransfer,
    validationSchema: transferFormSchema,
    onSubmit: async () => {
      try {
        const result: any = await createTransactionStoreAction(
          values.amount,
          values.bank
        );
        if (result.success) {
          showSuccessToast(result.message);
          getAllTransactionsAction();
          setTimeout(() => {
            getAllTransactionsAction();
            getWalletBalanceAction();
          }, 6000);
        } else if (result.success) {
          showErrorToast(result.message);
        }
      } catch (error: any) {
        showErrorToast(COMMON_CONSTANTS.UNEXPECTED_ERROR);
      }
    },
  });

  return (
    <div className="w-full  mx-auto bg-white rounded-xl md:rounded-xl flex flex-col gap-3">
      <div className="p-6 border-b border-gray-200">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <PlusCircle className="w-5 h-5" />
          Add Money
        </h2>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="px-6 flex flex-col gap-6"
      >
        <div className="space-y-2">
          <TextInput
            label="Amount"
            placeholder="Enter amount"
            onChange={handleChange}
            name="amount"
            value={values.amount}
          />
          {touched.amount && errors.amount && errors.amount ? (
            <p className="text-sm font-normal text-red-600">{errors.amount}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Bank
          </label>
          <Select
            onSelect={(value: any) => {
              handleChange({ target: { name: "bank", value } });
            }}
            options={[
              { key: "Axis Bank", value: "axisbank" },
              { key: "ICICI", value: "icici" },
            ]}
          />
          {touched.bank && errors.bank && errors.bank ? (
            <p className="text-sm font-normal text-red-600">{errors.bank}</p>
          ) : null}
        </div>

        <Button
          onClick={handleSubmit}
          loading={transactions[0]?.status === OnRampStatus.Processing}
        >
          Add Money
        </Button>
      </form>
    </div>
  );
};

export default AddMoneyCard;
