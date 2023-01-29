import { Body, updateBodyOnAdd } from "./Body/Body";
import { Head, updateHead } from "./Head/Head";
import { Input } from "./Input/Input";

export default function budgetApp(app: HTMLDivElement) {
  app.innerHTML += Head();
  app.innerHTML += Input(onAddBudgetItem);
  app.innerHTML += Body();
  
}

const onAddBudgetItem = (): void => {
  updateHead();

  //update body
  updateBodyOnAdd()
};
