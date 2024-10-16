export interface OnRampInterface {
  amount: number;
  bank: string;
}
export interface OnRampResponseInterface {
  id: string;
  status: string;
  token: string;
  provider: string;
  startTime: Date;
  userId: string;
  amount: number;
  bank?: string;
}
export interface OnRampTransactionsActionResponse {
  success: boolean;
  message: string;
  data?: OnRampResponseInterface[];
}
export type TransferStoreType = {
  loading: boolean;
  createTransactionStoreAction: (amount: string, provider: string) => void;
  getAllTransactionsAction: () => void;
  transactions: OnRampResponseInterface[];
  error?: string;
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
}
