import { Body, updateBodyOnAdd, updateBodyOnDelete } from "./Body/Body";
import { Head, updateHead } from "./Head/Head";
import { Input } from "./Input/Input";

export default function budgetApp(app: HTMLDivElement) {
  app.innerHTML += Head();
  app.innerHTML += Input(onAddBudgetItem);
  app.innerHTML += Body(onDeleteBudgetItem);
}

const onDeleteBudgetItem = (): void => {
  updateHead();
  updateBodyOnDelete();
};

const onAddBudgetItem = (): void => {
  updateHead();
  updateBodyOnAdd();
};
