import { BudgetType } from "./enums";
import IBudgetItem from "./interfaces/BudgetItem";

export const incomes: IBudgetItem[] = [
  { description: `income1`, amount: 11, id: `id1` },
  { description: `income2`, amount: 22, id: `id2` },
];
export const expenses: IBudgetItem[] = [
  { description: `expense1`, amount: 111, id: `id1` },
  { description: `expense2`, amount: 2, id: `id2` },
];

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

let currentBudgetItem = BudgetType.Income;

export const setCurrentBudgetItem = (type: BudgetType) => {
  currentBudgetItem = type;
};

export const addBudgetItem = (item: IBudgetItem) => {
  const items = currentBudgetItem == BudgetType.Income ? incomes : expenses;
  items.push(item);
};
