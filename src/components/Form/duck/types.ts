const actionTypes = {
  UPDATE_POST_PENDING: "/UPDATE_POST_PENDING",
  UPDATE_POST_FAILURE: "/UPDATE_POST_FAILURE",
  UPDATE_POST: "/UPDATE_POST",
};

export default actionTypes;

export type postType = {
  id?: number;
  userId: number;
  title: string;
  body: string;
};

export type FormProps = {
  isUpdating: boolean;
};

export type UpdateStateType = {
  isLoading: boolean;
  post: postType | null;
  hasError: boolean;
  errorMsg: string;
};

export type actionCreationTypes = {
  type: string;
  post?: postType;
  error?: string;
};

export type updatePostPendingAction = () => {
  type: typeof actionTypes.UPDATE_POST_PENDING;
};

export type updatePostFailureAction = (error: string) => {
  type: typeof actionTypes.UPDATE_POST_FAILURE;
  error: string;
};

export type updatePostAction = (post: postType) => {
  type: typeof actionTypes.UPDATE_POST;
  post: postType;
};
