import { TransactionType } from "../enums";

export interface OnRampInterface {
  amount: number;
  bank: string;
}
export interface OnRampResponseInterface {
  id: string;
  status: string;
  token?: string | undefined | null;
  provider?: string | undefined | null;
  startTime: Date;
  userId: string;
  amount: number;
  bank?: string;
  transactionType: string;
}
export interface BalanceResponseInterface {
  id: string;
  userId: string;
  amount: number;
  locked?: number;
}
export interface OnRampTransactionsActionResponse {
  success: boolean;
  message: string;
  data?: OnRampResponseInterface[];
}
export interface BalanceActionResponse {
  success: boolean;
  message: string;
  data?: BalanceResponseInterface;
}
export type TransferStoreType = {
  loading: boolean;
  createTransactionStoreAction: (amount: string, provider: string) => void;
  getAllTransactionsAction: () => void;
  transactions: OnRampResponseInterface[];
  error?: string;
  setLoading: (loading: boolean) => void;
};
export type BalanceStoreType = {
  loading: boolean;
  incrementBalanceStoreAction: (amount: string, provider: string) => void;
  getWalletBalanceAction: () => void;
  balance: number;
  error?: string;
};
export type P2PStoreType = {
  loading: boolean;
  sendMoneyAction: (amount: number, email: string) => void;
  errorMessage?: string;
  isError: boolean;
  isSuccess: boolean;
  successMessage: string;
};
export type AuthStoreType = {
  loading: boolean;
  error: string | null;
  message: string;
  signUp: (amount: string, provider: string) => void;
};
export interface AuthUserInterface {
  email: string;
  password: string;
}
export interface AuthUserResponseInterface {
  id: string;
  email?: string;
  password?: string;
}
export interface IndividualTransactionPropType {
  index: number;
  amount: number;
  startTime: Date;
  status: string;
  transactionType: string;
}
export type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  error?: string;
  placeholder?: string;
};
export interface DashboardSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  touched?: boolean;
  type?: string; // Optional, default is 'text'
}
