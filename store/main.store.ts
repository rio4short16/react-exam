import { InvoiceType } from "@/data/types/InvoiceType";
import { create } from "zustand";

interface IMainState {
  loading: boolean;
  updateLoading: (newValue: boolean) => void;
  invoices: InvoiceType[];
  setInvoices: (newInvoices: InvoiceType[]) => void;
}

export const useMainStore = create<IMainState>((set) => ({
  loading: false,
  invoices: [],
  updateLoading: (newValue: boolean) => {
    set({ loading: newValue });
  },
  setInvoices: (newInvoices: InvoiceType[]) => {
    set({ invoices: newInvoices });
  },
}));
