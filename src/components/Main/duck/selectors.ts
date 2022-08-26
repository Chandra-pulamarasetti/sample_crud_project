import { createSelector } from "reselect";
import { postType, PostsStateType } from "./types";
import { RootState } from "../../../store";

const getPostsState = (state: RootState): PostsStateType => state.PostsReducer;

const hasPostsError = createSelector(
  [getPostsState],
  (PostState: PostsStateType): boolean => PostState.hasPostsError
);

const hasDeleteError = createSelector(
  [getPostsState],
  (PostState: PostsStateType): boolean => PostState.hasDeleteError
);

const posts = createSelector(
  [getPostsState],
  (PostState: PostsStateType): postType[] | null => PostState.posts
);

const errorMsgPosts = createSelector(
  [getPostsState],
  (PostState: PostsStateType): string => PostState.errorMsgPosts
);

const errorMsgDelete = createSelector(
  [getPostsState],
  (PostState: PostsStateType): string => PostState.errorMsgDelete
);

const isPostsLoading = createSelector(
  [getPostsState],
  (PostState: PostsStateType): boolean => PostState.isPostsLoading
);

const isDeleteLoading = createSelector(
  [getPostsState],
  (PostState: PostsStateType): boolean => PostState.isDeleteLoading
);

const selectedPost = createSelector(
  [getPostsState],
  (PostState: PostsStateType): postType | null => PostState.selectedPost
);

export {
  posts,
  isPostsLoading,
  hasPostsError,
  errorMsgPosts,
  hasDeleteError,
  isDeleteLoading,
  errorMsgDelete,
  selectedPost,
};
