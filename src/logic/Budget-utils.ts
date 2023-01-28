import { BudgetType } from "./enums";
import IBudgetItem from "./interfaces/BudgetItem";

export const incomes: IBudgetItem[] = [];
export const expenses: IBudgetItem[] = [];

export const computeSum = (type: BudgetType): number => {
  const items = type == BudgetType.Income ? incomes : expenses;
  return computeTotal(items);
};

const computeTotal = (items: IBudgetItem[]): number => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.amount;
  });
  
  

  return sum;
};

export const computeBudget = (): number => {
  return computeTotal(incomes) - computeTotal(expenses);
};

export let currentBudgetItem = BudgetType.Income;

export const setCurrentBudgetItem = (type: BudgetType) => {
  currentBudgetItem = type;
};

export const addBudgetItem = (item: IBudgetItem) => {
  const items = currentBudgetItem == BudgetType.Income ? incomes : expenses;
  items.push(item);
};
