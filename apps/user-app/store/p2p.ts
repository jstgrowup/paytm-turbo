import { sendMoneyAction } from "@/server-actions/p2p.action";
import { P2PStoreType } from "@repo/utils/types";
import { create } from "zustand";
export const useP2PStore = create<P2PStoreType>((set) => ({
  loading: false,
  sendMoneyAction: async (amount: number, email: string) => {
    set({ loading: true });
    try {
      const sendP2PBalanceRes = await sendMoneyAction(amount, email);
      set({ loading: false });
      return sendP2PBalanceRes;
    } catch (error: any) {
      set({ loading: false });
    }
  },
}));
