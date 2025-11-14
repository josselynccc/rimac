import { create } from "zustand";
import type { PersonalData } from "@/features/insurance/types/PersonalData";

interface PersonalDataState {
  personalData: PersonalData | null;
  loading: boolean;
  error: string | null;
  setPersonalData: (data: PersonalData) => void;
}

export const usePersonalDataStore = create<PersonalDataState>((set) =>({
    personalData: null,
    loading: false,
    error: null,
    setPersonalData: (data: PersonalData) => {
        set({ personalData: data });
    }
}))