import type { Plan } from "@/features/plans/types/Plan";
import { create } from "zustand";
import api from "../services/api";

interface PlansState {
  plans: Plan[];
  selectedPlan: Plan | null;
  loading: boolean;
  error: string | null;
  getPlans: () => Promise<void>;
  selectPlan: (plan:Plan) => void;
}

export const usePlansStore = create<PlansState>((set) =>({
    plans: [],
    selectedPlan: null,
    loading: false,
    error: null,
    getPlans: async() => {
        set({loading:true, error:null})
        try {
            const response = await api.get<{ list: Plan[] }>('/plans.json');
            set ({plans: response.data.list, loading:false})
        } catch (error) {
            console.log(error)
            set({ 
                error: 'Error al cargar planes',
                loading: false 
            });
        }
    },

    selectPlan: (plan: Plan) => {
        set({ selectedPlan: plan });
    },
}))