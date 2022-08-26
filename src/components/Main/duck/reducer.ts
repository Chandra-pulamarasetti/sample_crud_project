import actionTypes, { PostsStateType, actionCreationTypes } from "./types";

const intitalState: PostsStateType = {
  isPostsLoading: false,
  isDeleteLoading: false,
  posts: null,
  post: null,
  hasPostsError: false,
  hasDeleteError: false,
  errorMsgPosts: "",
  errorMsgDelete: "",
  selectedPost : null
};

const postsReducer = (
  state: PostsStateType = intitalState,
  actions: actionCreationTypes
): PostsStateType => {
  switch (actions.type) {
    case actionTypes.FETCH_POSTS_PENDING:
      return {
        ...state,
        isPostsLoading: true,
      };
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        isPostsLoading: false,
        posts: actions.posts ?? null,
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isPostsLoading: false,
        hasPostsError: true,
        errorMsgPosts: actions.error ?? "",
      };
    case actionTypes.DELETE_POST_PENDING:
      return {
        ...state,
        isDeleteLoading: true,
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        isDeleteLoading: false,
        post: actions.post ?? null,
      };
    case actionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        isDeleteLoading: false,
        hasDeleteError: true,
        errorMsgDelete: actions.error ?? "",
      };
    case actionTypes.SELECT_POST:
      return {
        ...state,
        selectedPost : actions.post ?? null
      }

    default:
      return state;
  }
};

export default postsReducer;
