import {
  addBudgetItem,
  currentBudgetItem,
  setCurrentBudgetItem,
} from "../logic/Budget-utils";
import { BudgetType } from "../logic/enums";
import { v4 as uuidv4 } from "uuid";
import IBudgetItem from "../logic/interfaces/BudgetItem";
import "./Input.css";

export const Input = (onAddBudgetItem: () => void) => {
  function addBudgetSubmitHandler() {
    const formElem: HTMLFormElement = document.querySelector(".Input > .form")!;
    let item: IBudgetItem = {
      description: formElem.desc.value,
      amount: formElem.amount.value,
      id: createUniqueId(),
    };
    addBudgetItem(item);
    onAddBudgetItem();
    formElem.reset();

    return false;
  }

  (window as any).addBudgetSubmitHandler = addBudgetSubmitHandler;
  (window as any).selectClickHandler = selectClickHandler;
  (window as any).focusHandler = focusHandler;

  const selectElem = `<select class="selected_income" name='type' onclick=selectClickHandler(this)><option>+</option><option>-</option></select>`;
  const inputElem = `<input onfocus='focusHandler(this)' type="text" class="desc" name="desc" placeholder="Add Description" ></input> 
  <input onfocus='focusHandler(this)' type="number" name="amount" min=0 placeholder="Add Amount" ></input>`;
  const buttonElm = `<button class="button-income fa fa-check-circle"></button>`;
  const formElem = `${selectElem} ${inputElem} ${buttonElm}`;

  return `<div class='Input'><form class="form" onsubmit= 'return addBudgetSubmitHandler()'>${formElem}</form></div>`;
};

export const createUniqueId = (): string => {
  return uuidv4();
};

function selectClickHandler(elem: HTMLElement) {
  const formElem: HTMLFormElement = document.querySelector(".Input > .form")!;
  const buttonClassList = formElem.querySelector("button")?.classList;

  let type: BudgetType;
  if (formElem.type.value == "+") {
    type = BudgetType.Income;
    buttonClassList?.replace("button-expense", "button-income");
  } else {
    type = BudgetType.Expense;
    buttonClassList?.replace("button-income", "button-expense");
  }

  setCurrentBudgetItem(type);
  focusHandler(elem);
}

const focusHandler = (elem: HTMLElement) => {
  const formElem: HTMLFormElement = document.querySelector(".Input > .form")!;
  for (let index = 0; index < formElem.children.length; index++) {
    const child = formElem[index];
    child.classList.remove("selected_income");
    child.classList.remove("selected_expanse");
  }

  elem.classList.add(
    currentBudgetItem == BudgetType.Income
      ? "selected_income"
      : "selected_expanse"
  );
};
