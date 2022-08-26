import * as FormTypes from "./types";
import * as UpdateSelectors from "./selectors";
import actionTypes from "./types";
import * as actions from "./actions";
import UpdatePostReducer from "./reducer";
import * as thunkActions from './thunk'

export { actionTypes, FormTypes, actions, UpdatePostReducer, UpdateSelectors, thunkActions };

export default UpdatePostReducer;