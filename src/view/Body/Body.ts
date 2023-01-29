import { Expanses } from "../Expanses/Expanses";
import { Incomes } from "../Incomes/Incomes";
import './Body.css'


export const Body = () => {
  return `<div class="body">${Incomes()}${Expanses()}</div>`;
  
};
