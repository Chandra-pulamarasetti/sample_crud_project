import actionTypes, { actionCreationTypes, UpdateStateType } from "./types";

const intitalState: UpdateStateType = {
  isLoading: false,
  post: null,
  hasError: false,
  errorMsg: "",
};

const reducer = (
  state: UpdateStateType = intitalState,
  actions: actionCreationTypes
) => {
  switch (actions.type) {
    case actionTypes.UPDATE_POST_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        isLoading: false,
        post: actions.post ?? null,
      };
    case actionTypes.UPDATE_POST_FAILURE:
      return {
        ...state,
        hasError: true,
        errorMsg: actions.error ?? "Something went Wrong",
      };
    default:
      return state;
  }
};

export default reducer;
