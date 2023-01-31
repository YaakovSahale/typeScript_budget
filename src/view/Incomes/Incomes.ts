import { deleteBudgetItem, getLastBudgetItem } from "../../logic/Budget-utils";
import { BudgetType } from "../../logic/enums";
import { formatNumber } from "../../logic/general-utils";
import IBudgetItem from "../../logic/interfaces/BudgetItem";
import { ClassIncExp } from "../enums";
import { updateHead } from "../Head/Head";
import "./Incomes.css";

const CLASS_ROOT = "incomes";

export const Incomes = () => {
  (window as any).deleteIncome = deleteIncome;
  return `<div class=${CLASS_ROOT}><p class=${ClassIncExp.Header}>Incomes</p></div>`;
};

export const onIncomeAdded = () => {
  const item = getLastBudgetItem();
  const newItemElem = createIncomeElem(item);
  getIncomeElem().innerHTML += newItemElem;
};

const getIncomeElem = (): HTMLDivElement => {
  return document.querySelector(`.${CLASS_ROOT}`)!;
};

const createIncomeElem = (item: IBudgetItem): string => {
  const leftElem = `<span class=${ClassIncExp.Left}>${item.description}</span>`;
  const buttonElem = `<span class='delete fa fa-minus-circle' onclick=deleteIncome('${item.id}')></span>`;
  const rightElem = `<div class=${ClassIncExp.Right}>
  <span>${formatNumber(item.amount)}</span><span>${buttonElem}</span>
  </div>`;

  return `<div class=${ClassIncExp.Item} id=${getDomItemId(
    item.id
  )}>${leftElem}${rightElem}</div>`;
};

const getDomItemId = (id: string) => {
  return `id_income_${id}`;
};

const deleteIncome = (id: string): void => {
  deleteBudgetItem(id, BudgetType.Income);

  document.getElementById(getDomItemId(id))?.remove();

  updateHead();
};
