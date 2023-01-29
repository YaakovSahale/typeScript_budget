import { formatNumber } from "../../logic/general-utils";
import {
  computeBudget,
  computeSum,
  expenses,
  incomes,
} from "../../logic/Budget-utils";
import { getMonth, getYear } from "../../logic/time-utils";
import { ClassHead } from "../enums";
import { formatFinitePercentage } from "../view-utils";
import { BudgetType } from "../../logic/enums";
import "./Head.css";

export const Head = () => {
  const now = new Date();
  const dateElm = `<p class ='${ClassHead.Date}'>Available budget in ${getMonth(
    now
  )} ${getYear(now)}</p>`;

  return `<div class=${ClassHead.Root}>${dateElm} ${getDynamic()}</div>`;
};

const getDynamic = (): string => {
  const totalIncomes = computeSum(BudgetType.Income);
  const totalExpenses = computeSum(BudgetType.Expense);
  const percentageElm = `  <span class='${
    ClassHead.Percentage
  }'> ${formatFinitePercentage(totalExpenses, totalIncomes)} </span>`;

  const budgetElm = `<p class ='${ClassHead.Budget} ${
    ClassHead.Number
  }'>${formatNumber(computeBudget())}<p/>`;
  const incomeElm = `<div class='${ClassHead.IncomeExpense} ${
    ClassHead.Income
  }'><span class='${ClassHead.Title}'>INCOME :</span> <span class='${
    ClassHead.Number
  }'><span>${formatNumber(totalIncomes)}</span><span></span></span></div>`;
  const expenseElm = `<div class='${ClassHead.IncomeExpense} ${
    ClassHead.Expense
  }'><span class='${ClassHead.Title}'>EXPENSE:</span> <span class='${
    ClassHead.Number
  }'><span>${formatNumber(
    totalExpenses
  )}</span><span>${percentageElm}</span></div>`;

  return `<div class=${ClassHead.Dynamic}>${budgetElm} ${incomeElm} ${expenseElm}<div>`;
};

export const updateHead = () => {
  const dynamicNode = document.querySelector(
    `.${ClassHead.Root} > .${ClassHead.Dynamic}`
  );

  dynamicNode!.innerHTML = getDynamic();
};
