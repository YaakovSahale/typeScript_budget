import { currentBudgetItem } from "../../logic/Budget-utils";
import { BudgetType } from "../../logic/enums";
import {
  Expanses,
  onExpanseAdded,
  updateAllExpansesPercentage,
} from "../Expanses/Expanses";
import { Incomes, onIncomeAdded } from "../Incomes/Incomes";
import "./Body.css";

export const Body = (onDeleteBudgetItem: () => void) => {
  return `<div class="body">${Incomes(onDeleteBudgetItem)}${Expanses(
    onDeleteBudgetItem
  )}</div>`;
};

export const updateBodyOnAdd = () => {
  if (currentBudgetItem == BudgetType.Income) {
    onIncomeAdded();
    updateAllExpansesPercentage();
  } else {
    onExpanseAdded();
  }
};

export const updateBodyOnDelete = () => {
  updateAllExpansesPercentage();
};
