import { Loader2 } from "lucide-react";
import { ButtonProps } from "./utils/types";
export const Button = ({ onClick, children, loading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={loading}
      className={`rounded-xl w-full py-3 px-4 font-medium transition-colors
      ${
        loading
          ? "bg-blue-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } text-white`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
