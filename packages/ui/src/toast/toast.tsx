import { toast } from "sonner";
export const showSuccessToast = (message: string) => {
  return toast.success(message || "Operation successful!", {
    position: "top-right",
    duration: 3000,
    style: {
      backgroundColor: "#38b000",
      color: "#ffffff",
      borderRadius: "8px",
      fontWeight: "bolder",
      padding: "15px 20px",
      border: "none",
    },
  });
};
// SecureP@ss123
export const showErrorToast = (message: string) => {
  return toast.error(message || "Something went wrong!", {
    position: "top-right",
    duration: 3000,
    style: {
      backgroundColor: "#e5383b",
      border: "none",
      color: "#ffffff",
      borderRadius: "8px",
      fontWeight: "bolder",
      padding: "15px 20px",
    },
  });
};
