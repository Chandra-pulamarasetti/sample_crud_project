import axios from "axios";
import { Dispatch } from "../../../store";
import {
  fetchPosts,
  fetchPostsFailure,
  fetchPostsPending,
  deletePost,
  deletePostFailure,
  deletePostPending,
} from "./actions";

export const getPosts = () => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(fetchPostsPending());
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        const posts = res?.data;
        dispatch(fetchPosts(posts));
      });
    } catch (error) {
      const errorMsg =
        (error as { message: string })?.message ?? "something went wrong";
      dispatch(fetchPostsFailure(errorMsg));
    }
  };
};

export const deleteAPost = (id: number) => {
  return (dispatch: Dispatch) => {
    try {
      dispatch(deletePostPending());
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          const post = res?.data;
          dispatch(deletePost(post));
        });
    } catch (error) {
      const errorMsg =
        (error as { message: string })?.message ?? "something went wrong";
      dispatch(deletePostFailure(errorMsg));
    }
  };
};
