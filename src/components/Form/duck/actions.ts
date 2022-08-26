import actionTypes, {
  postType,
  updatePostAction,
  updatePostFailureAction,
  updatePostPendingAction,
} from "./types";

const updatePostPending: updatePostPendingAction = () => ({
  type: actionTypes.UPDATE_POST_PENDING,
});

const updatePost: updatePostAction = (post: postType) => ({
  type: actionTypes.UPDATE_POST,
  post,
});

const updatePostFailure: updatePostFailureAction = (error: string) => ({
  type: actionTypes.UPDATE_POST_FAILURE,
  error,
});

export { updatePost, updatePostFailure, updatePostPending };
