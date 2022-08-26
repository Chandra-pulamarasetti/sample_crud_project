import axios from "axios";

import { Dispatch } from "../../../store";
import { updatePost, updatePostFailure, updatePostPending } from "./actions";
import { postType } from "./types";

export const updatePosts = (post: postType | null) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(updatePostPending());
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${post?.id}`, {
          ...post,
        })
        .then((res) => {
          const post = res?.data;
          dispatch(updatePost(post));
        });
    } catch (error) {
      const errorMsg =
        (error as { message: string })?.message ?? "something went wrong";
      dispatch(updatePostFailure(errorMsg));
    }
  };
};

export const createPosts = (post: postType | null) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(updatePostPending());
      axios
        .post(`https://jsonplaceholder.typicode.com/posts`, {
          ...post,
        })
        .then((res) => {
          const post = res?.data;
          dispatch(updatePost(post));
        });
    } catch (error) {
      const errorMsg =
        (error as { message: string })?.message ?? "something went wrong";
      dispatch(updatePostFailure(errorMsg));
    }
  };
};
