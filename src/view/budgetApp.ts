import { Head } from "./Head";
import { Input } from "./input";

export default function budgetApp(app: HTMLDivElement) {
  app.innerHTML += Head();
  app.innerHTML += Input()
}
