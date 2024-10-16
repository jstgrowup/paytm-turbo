import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
};

const PasswordInput = ({
  value,
  onChange,
  name,
  label,
  error,
  placeholder = "••••••••",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          className={`bg-white border rounded-xl border-gray-300 text-gray-900 text-sm block w-full p-2.5 pr-10
            ${error ? "border-red-500" : "border-gray-300"}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;
