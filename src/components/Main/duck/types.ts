const actionTypes = {
  FETCH_POSTS_PENDING: "/FETCH_POSTS_PENDING",
  FETCH_POSTS_FAILURE: "/FETCH_POSTS_FAILURE",
  FETCH_POSTS: "/FETCH_POSTS",
  DELETE_POST_PENDING: "/DELETE_POST_PENDING",
  DELETE_POST_FAILURE: "/DELETE_POST_FAILURE",
  DELETE_POST: "/DELETE_POST",
  SELECT_POST: "/SELECT_POST",
};

export type postType = {
  id?: number;
  userId: number;
  title: string;
  body: string;
};

export type PostsStateType = {
  isPostsLoading: boolean;
  isDeleteLoading: boolean;
  posts: postType[] | null;
  post: postType | null;
  hasPostsError: boolean;
  hasDeleteError: boolean;
  errorMsgPosts: string;
  errorMsgDelete: string;
  selectedPost: postType | null;
};

export default actionTypes;

export type actionCreationTypes = {
  type: string;
  posts?: postType[];
  post?: postType;
  error?: string;
};

export type fetchPostsPendingActions = () => {
  type: typeof actionTypes.FETCH_POSTS_PENDING;
};

export type fetchPostsFailureActions = (error: string) => {
  type: typeof actionTypes.FETCH_POSTS_FAILURE;
  error: string;
};

export type fetchPostsActions = (posts: postType[]) => {
  type: typeof actionTypes.FETCH_POSTS;
  posts: postType[];
};

export type DeletePostPendingActions = () => {
  type: typeof actionTypes.DELETE_POST_PENDING;
};

export type DeletePostFailureAction = (error: string) => {
  type: typeof actionTypes.DELETE_POST_FAILURE;
  error: string;
};

export type DeletePostAction = (post: postType) => {
  type: typeof actionTypes.DELETE_POST;
  post: postType;
};

export type selectPostAction = (post: postType) => {
  type: typeof actionTypes.SELECT_POST;
  post: postType;
};
