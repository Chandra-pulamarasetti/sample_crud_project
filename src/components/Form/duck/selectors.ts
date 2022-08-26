import { createSelector } from "reselect";
import { UpdateStateType } from "./types";
import { RootState } from "../../../store";

const getUpdateState = (state: RootState): UpdateStateType =>
  state.UpdatePostReducer;

const hasError = createSelector(
  [getUpdateState],
  (UpdateState: UpdateStateType): boolean => UpdateState.hasError
);

const isLoading = createSelector(
  [getUpdateState],
  (UpdateState: UpdateStateType): boolean => UpdateState.isLoading
);

const errorMsg = createSelector(
  [getUpdateState],
  (UpdateState: UpdateStateType): string => UpdateState.errorMsg
);

export { hasError, isLoading, errorMsg };
