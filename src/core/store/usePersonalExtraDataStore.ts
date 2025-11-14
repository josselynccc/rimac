import { create } from "zustand";
import api from "../services/api";

interface PersonalExtraData {
    name: string,
    lastName: string,
    birthDay: string
}

interface PersonalExtraDataState {
  personalExtraData: PersonalExtraData | null;
  loading: boolean;
  error: string | null;
  getPeronalExtraData: () => void;
}

export const usePersonalExtraDataStore = create<PersonalExtraDataState>((set) =>({
    personalExtraData: null,
    loading: false,
    error: null,
    getPeronalExtraData: async() => {
        set({loading:true, error:null})
        try {
            const response = await api.get<PersonalExtraData>('/user.json');
            set ({personalExtraData: response.data, loading:false})
        } catch (error) {
            console.log(error)
            set({ 
                error: 'Error al cargar planes',
                loading: false 
            });
        }
    },
}))