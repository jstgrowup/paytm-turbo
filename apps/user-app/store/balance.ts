import {
  addBalanceAction,
  getWalletBalance,
} from "@/server-actions/balance.action";
import { BalanceStoreType } from "@repo/utils/types";
import { create } from "zustand";

export const useBalanceStore = create<BalanceStoreType>((set) => ({
  loading: false,
  balance: 0,

  incrementBalanceStoreAction: async (amount: string) => {
    set({ loading: true });
    try {
      const incrementedBalanceRes = await addBalanceAction(Number(amount));
      set({ loading: false });
      return incrementedBalanceRes;
    } catch (error: any) {
      set({ loading: false });
    }
  },
  getWalletBalanceAction: async () => {
    set({ loading: true });
    try {
      const walletBalanceRes = await getWalletBalance();
      set({
        loading: false,
      });
      return walletBalanceRes;
    } catch (error: any) {
      set({ loading: false });
    }
  },
}));
