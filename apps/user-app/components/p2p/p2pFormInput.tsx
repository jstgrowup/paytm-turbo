import { InputFieldProps } from "@repo/utils/types";
import React from "react";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  touched,
  type = "text",
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="bg-white border rounded-xl border-gray-300 text-gray-900 text-sm block w-full p-2.5"
        placeholder={placeholder}
      />
      {touched && error && (
        <p className="text-sm font-normal text-red-600">{error}</p>
      )}
    </div>
  );
};

export default InputField;
