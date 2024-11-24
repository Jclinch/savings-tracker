//path: savings-tracker\contexts\SavingsContext.tsx
import React, { createContext, ReactNode, useState } from "react";

interface SavingsData {
  goalName: string;
  targetAmount: number;
  savedAmount: number;
}

interface SavingsContextType {
  data: SavingsData;
  setGoal: (goalName: string, targetAmount: number) => void;
  updateSavings: (amount: number) => void;
}

// Initialize SavingsContext
export const SavingsContext = createContext<SavingsContextType | null>(null);

export const SavingsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SavingsData>({
    goalName: "",
    targetAmount: 0,
    savedAmount: 0,
  });

  const setGoal = (goalName: string, targetAmount: number) => {
    setData({ goalName, targetAmount, savedAmount: 0 });
  };

  const updateSavings = (amount: number) => {
    setData((prev) => ({
      ...prev,
      savedAmount: prev.savedAmount + amount,
    }));
  };

  return (
    <SavingsContext.Provider value={{ data, setGoal, updateSavings }}>
      {children}
    </SavingsContext.Provider>
  );
};
