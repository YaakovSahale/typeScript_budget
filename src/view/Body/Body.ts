import { currentBudgetItem } from "../../logic/Budget-utils";
import { BudgetType } from "../../logic/enums";
import { Expanses, onExpanseAdded } from "../Expanses/Expanses";
import { Incomes, onIncomeAdded } from "../Incomes/Incomes";
import "./Body.css";

export const Body = () => {
  return `<div class="body">${Incomes()}${Expanses()}</div>`;
};

export const updateBodyOnAdd = () => {
  if (currentBudgetItem == BudgetType.Income) {
    onIncomeAdded();
  } else {
    onExpanseAdded();
  }
};
