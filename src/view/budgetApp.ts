import { Head, updateHead } from "./Head";
import { Input } from "./input";

export default function budgetApp(app: HTMLDivElement) {
  app.innerHTML += Head();
  app.innerHTML += Input(onAddBudgetItem);
}

const onAddBudgetItem = (): void => {
  updateHead();



  
  //update body

  console.log("hello from onBudget");
};
