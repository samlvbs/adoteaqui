import { IState } from "./state.interface";

export interface IStateResponseData{
  name: string;
  iso3: string;
  states: IState[]
}
