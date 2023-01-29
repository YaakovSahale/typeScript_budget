import {
  addBudgetItem,
  currentBudgetItem,
  setCurrentBudgetItem,
} from "../../logic/Budget-utils";
import { BudgetType } from "../../logic/enums";
import { v4 as uuidv4 } from "uuid";
import IBudgetItem from "../../logic/interfaces/BudgetItem";
import "./Input.css";
import { ClassInput } from "../enums";

export const Input = (onAddBudgetItem: () => void) => {
  function addBudgetSubmitHandler() {
    let item: IBudgetItem = {
      description: getFormElement().desc.value,
      amount: parseInt(getFormElement().amount.value),
      id: createUniqueId(),
    };

    addBudgetItem(item);
    onAddBudgetItem();
    getFormElement().reset();

    return false;
  }

  (window as any).addBudgetSubmitHandler = addBudgetSubmitHandler;
  (window as any).selectClickHandler = selectClickHandler;
  (window as any).focusHandler = focusHandler;

  const selectElem = `<select class=${ClassInput.SelectedIncome} name='type' onclick=selectClickHandler(this)><option>+</option><option>-</option></select>`;
  const inputElem = `<input onfocus='focusHandler(this)' type="text" class=${ClassInput.Desc} name="desc" placeholder="Add Description" ></input> 
  <input onfocus='focusHandler(this)' type="number" name="amount" min=0 placeholder="Add Amount" ></input>`;
  const buttonElm = `<button class='${ClassInput.ButtonIncome} fa fa-check-circle'></button>`;
  const formElem = `${selectElem} ${inputElem} ${buttonElm}`;

  return `<div class='${ClassInput.Root}'><form class="form" onsubmit= 'return addBudgetSubmitHandler()'>${formElem}</form></div>`;
};

export const createUniqueId = (): string => {
  return uuidv4();
};

function selectClickHandler(elem: HTMLElement) {
  const buttonClassList = getFormElement().querySelector("button")?.classList;

  let type: BudgetType;
  if (getFormElement().type.value == "+") {
    type = BudgetType.Income;
    buttonClassList?.replace(ClassInput.ButtonExpense, ClassInput.ButtonIncome);
  } else {
    type = BudgetType.Expense;
    buttonClassList?.replace(ClassInput.ButtonIncome, ClassInput.ButtonExpense);
  }

  setCurrentBudgetItem(type);
  focusHandler(elem);
}

const focusHandler = (elem: HTMLElement) => {
  for (let index = 0; index < getFormElement().children.length; index++) {
    const child = getFormElement()[index];
    child.classList.remove(ClassInput.SelectedIncome);
    child.classList.remove(ClassInput.SelectedExpanse);
  }

  elem.classList.add(
    currentBudgetItem == BudgetType.Income
      ? ClassInput.SelectedIncome
      : ClassInput.SelectedExpanse
  );
};

const getFormElement = (): HTMLFormElement => {
  return document.querySelector(`.${ClassInput.Root} > .${ClassInput.Form}`)!;
};
