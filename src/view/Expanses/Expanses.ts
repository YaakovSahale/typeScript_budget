import {
  computeSum,
  deleteBudgetItem,
  getLastBudgetItem,
} from "../../logic/Budget-utils";
import { BudgetType } from "../../logic/enums";
import { formatNumber } from "../../logic/general-utils";
import { ClassIncExp } from "../enums";
import { updateHead } from "../Head/Head";
import { formatFinitePercentage } from "../view-utils";
import IBudgetItem from "../../logic/interfaces/BudgetItem";
import "./Expanses.css";

const CLASS_ROOT = "expanses";
const CLASS_PERCENTAGE = "percentage";
const CLASS_NUMBER = "NUMBER";
const CLASS_AMOUNT ='amount'

export const Expanses = () => {
  (window as any).deleteExpanse = deleteExpanse;
  return `<div class=${CLASS_ROOT}><p class=${ClassIncExp.Header}>Expanses</p></div>`;
};

export const onExpanseAdded = () => {
  const item = getLastBudgetItem();
  const newItemElem = createExpanseElem(item);
  getExpanseElem().innerHTML += newItemElem;
};

const getExpanseElem = (): HTMLDivElement => {
  return document.querySelector(`.${CLASS_ROOT}`)!;
};

const createExpanseElem = (item: IBudgetItem): string => {
  const totalIncome = computeSum(BudgetType.Income);
  const expanse = item.amount;
  const percentageElem = `<span class=${CLASS_PERCENTAGE}>${formatFinitePercentage(
    expanse,
    totalIncome
  )}<span>`;
    const amountElem = `<span class=${CLASS_AMOUNT}>${formatNumber(expanse)}</span>`

  const leftElem = `<span class=${ClassIncExp.Left}>${item.description}</span>`;
  const buttonElem = `<span class='delete fa fa-minus-circle' onclick=deleteExpanse('${item.id}')></span>`;
  const rightElem = `<div class=${ClassIncExp.Right}>
  <span class=${CLASS_NUMBER}>${amountElem} ${percentageElem}</span><span>${buttonElem}</span>
  </div>`;


  return `<div class=${ClassIncExp.Item} id=${getDomItemId(
    item.id
  )}>${leftElem}${rightElem}</div>`;
};

const getDomItemId = (id: string) => {
  return `id_expanse_${id}`;
};

const deleteExpanse = (id: string): void => {
  deleteBudgetItem(id, BudgetType.Expense);

  document.getElementById(getDomItemId(id))?.remove();

  updateHead();
};
