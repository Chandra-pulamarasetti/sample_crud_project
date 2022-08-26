import * as postsSelectors from "./selectors";

import PostsReducer from "./reducer";
import * as PostsTypes from "./types";
import actionTypes from "./types";
import * as actions from "./actions";

import * as thunkActions from "./thunk";

export {
  postsSelectors,
  PostsReducer,
  PostsTypes,
  actionTypes,
  actions,
  thunkActions,
};

export default PostsReducer;
