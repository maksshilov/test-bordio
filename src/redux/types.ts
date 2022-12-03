import { ICard } from "../types";

export enum ActionTypes {
  SET_DATA = "SET_DATA",
}

interface ISetData {
  type: ActionTypes.SET_DATA;
  data: ICard[];
}

export type Action = ISetData;
