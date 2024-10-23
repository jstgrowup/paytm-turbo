import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  loading: boolean;
  type: "button" | "submit" | "reset" | undefined;
}
