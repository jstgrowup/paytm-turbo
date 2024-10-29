import {
  createOnRampTransactions,
  getOnRampTransactions,
} from "@/server-actions/transaction.action";
import {
  TransferStoreType,
  OnRampTransactionsActionResponse,
} from "@repo/utils/types";
import { create } from "zustand";
export const useTransferStore = create<TransferStoreType>((set) => ({
  loading: false,
  transactions: [],
  setLoading: (loading: boolean) => set({ loading }),
  createTransactionStoreAction: async (amount: string, provider: string) => {
    set({ loading: true });
    try {
      const createdTransaction = await createOnRampTransactions(
        Number(amount),
        provider
      );
      set({ loading: false });
      return createdTransaction;
    } catch (error: any) {
      set({ loading: false });
    }
  },
  getAllTransactionsAction: async () => {
    set({ loading: true });
    try {
      const userTransactions: OnRampTransactionsActionResponse =
        await getOnRampTransactions();
      const buildedTransactionData = {
        data: userTransactions.data,
        success: userTransactions.success,
        message: userTransactions.message,
      };
      set({
        loading: false,
        transactions: userTransactions.data,
      });
      return buildedTransactionData;
    } catch (error: any) {
      set({ loading: false });
    }
  },
}));
