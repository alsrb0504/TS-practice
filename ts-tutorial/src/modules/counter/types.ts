import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type CounterAction = ActionType<typeof actions>;

export type CounterState = {
  count: number;
};
