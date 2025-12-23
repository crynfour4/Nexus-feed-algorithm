import { create } from 'zustand';

interface StepState {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetSteps: () => void;
}

const useStepStore = create<StepState>((set) => ({
  currentStep: 1,

  nextStep: () => 
    set((state) => ({ 
      currentStep: state.currentStep + 1 
    })),

  prevStep: () => 
    set((state) => ({ 
      currentStep: Math.max(1, state.currentStep - 1) 
    })),

  setStep: (step: number) => 
    set({ 
      currentStep: step 
    }),

  resetSteps: () => 
    set({ 
      currentStep: 1 
    }),
}));

export default useStepStore;