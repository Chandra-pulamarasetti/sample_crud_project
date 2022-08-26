import actionsTypes, {
  fetchPostsActions,
  fetchPostsPendingActions,
  fetchPostsFailureActions,
  postType,
  DeletePostAction,
  DeletePostFailureAction,
  DeletePostPendingActions,
  selectPostAction,
} from "./types";

const fetchPostsPending: fetchPostsPendingActions = () => ({
  type: actionsTypes.FETCH_POSTS_PENDING,
});

const fetchPosts: fetchPostsActions = (posts: postType[]) => ({
  type: actionsTypes.FETCH_POSTS,
  posts,
});

const fetchPostsFailure: fetchPostsFailureActions = (error: string) => ({
  type: actionsTypes.FETCH_POSTS_FAILURE,
  error,
});

const deletePostPending: DeletePostPendingActions = () => ({
  type: actionsTypes.DELETE_POST_PENDING,
});

const deletePost: DeletePostAction = (post: postType) => ({
  type: actionsTypes.DELETE_POST,
  post,
});

const deletePostFailure: DeletePostFailureAction = (error: string) => ({
  type: actionsTypes.DELETE_POST_FAILURE,
  error,
});

const selectPost: selectPostAction = (post: postType) => ({
  type: actionsTypes.SELECT_POST,
  post,
});

export {
  fetchPosts,
  fetchPostsPending,
  fetchPostsFailure,
  deletePostPending,
  deletePost,
  deletePostFailure,
  selectPost,
};
