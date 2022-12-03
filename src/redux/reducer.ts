import { ICard } from "../types";
import { Action, ActionTypes } from "./types";

export interface IState {
  data: ICard[] | undefined;
}

const initialState: IState = {
  data: undefined,
};

export const reducer = (state = initialState, action: Action): IState => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.data };

    default:
      return state;
  }
};
