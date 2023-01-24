import {
  addBudgetItem,
  incomes,
  setCurrentBudgetItem,
} from "../logic/Budget-utils";
import { BudgetType } from "../logic/enums";
import { v4 as uuidv4 } from "uuid";
import IBudgetItem from "../logic/interfaces/BudgetItem";

export const Input = () => {
  const selectElem = `<select name='type' onclick=selectClickHandler()><option>+</option><option>-</option></select>`;
  const inputElem = `<input type="text" name="desc" placeholder="Add Description" ></input> 
  <input type="number" name="amount" min=0 placeholder="Add Amount" ></input>`;
  const buttonElm = `<button>Add</button>`;
  const formElem = `${selectElem} ${inputElem} ${buttonElm}`;

  return `<div class='Input'><form class="form" onsubmit= 'return addBudgetSubmitHandler()'>${formElem}</form></div>`;
};

export const createUniqueId = (): string => {
  return uuidv4();
};

function addBudgetSubmitHandler() {
  const formElem: HTMLFormElement = document.querySelector(".Input > .form")!;
  let item: IBudgetItem = {
    description: formElem.desc.value,
    amount: formElem.amount.value,
    id: createUniqueId(),
  };
  addBudgetItem(item);
  formElem.reset()
  return false;
}

function selectClickHandler() {
  const formElem: HTMLFormElement = document.querySelector(".Input > .form")!;

  setCurrentBudgetItem(
    formElem.type.value == "+" ? BudgetType.Income : BudgetType.Expense
  );
}

(window as any).addBudgetSubmitHandler = addBudgetSubmitHandler;
(window as any).selectClickHandler = selectClickHandler;
