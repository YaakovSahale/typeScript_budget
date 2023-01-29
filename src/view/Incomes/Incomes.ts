import { getLastBudgetItem } from "../../logic/Budget-utils";
import "./Incomes.css";

export const Incomes = () => {
  return `<div class="incomes">Incomes</div>`;
};

export const onIncomeAdded = () => {
  const item = getLastBudgetItem();
};
