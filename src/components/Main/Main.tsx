import "./style.css";
import { useAuth } from "../../auth";
import NavBar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { TypedDispatch } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { postsSelectors, thunkActions, actions } from "./duck";
import { Container, ListGroup, Button } from "react-bootstrap";

const Main: React.FC = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const isPostsLoading = useSelector(postsSelectors.isPostsLoading);
  const isDeleteLoading = useSelector(postsSelectors.isDeleteLoading);
  const posts = useSelector(postsSelectors.posts);
  const hasPostsError = useSelector(postsSelectors.hasPostsError);
  const hasDeleteError = useSelector(postsSelectors.hasDeleteError);
  const errorMsgPosts = useSelector(postsSelectors.errorMsgPosts);
  const errorMsgDelete = useSelector(postsSelectors.errorMsgDelete);
  const selectedPost = useSelector(postsSelectors.selectedPost);

  useEffect(() => {
    dispatch(thunkActions.getPosts());
  }, [dispatch]);

  const renderPosts = () => {
    return posts?.map((post, index) => (
      <React.Fragment key={post.id}>
        <ListGroup.Item
          className="d-flex justify-content-between text-left align-items-start flex-container"
          as="li"
        >
          <div className="ms-2 me-auto w-25">
            <p>
              <strong>Title : </strong>
              {post?.title}
            </p>
            <p>
              {" "}
              <strong>Body : </strong>
              {post?.body}{" "}
            </p>
          </div>
          <div className="btns">
            <Link to={`/update/${post.id}`}>
              <Button variant="primary" className="m-2">
                Update
              </Button>
            </Link>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => {
                if (!isLoggedIn) {
                  navigate("/login");
                }
                dispatch(actions.selectPost(post));
                dispatch(thunkActions.deleteAPost(post?.id as number));
              }}
            >
              {isDeleteLoading && post?.id === selectedPost?.id
                ? "Deleting..."
                : "Delete"}
            </Button>
          </div>
        </ListGroup.Item>
      </React.Fragment>
    ));
  };

  return (
    <>
      <NavBar />
      <Container className="d-flex justify-content-center align-items-center">
        {isPostsLoading && <h1>Loading....</h1>}
        {hasPostsError && <h1>{errorMsgPosts}</h1>}
        {hasDeleteError && <h1>{errorMsgDelete}</h1>}
      </Container>
      <Container className="main-container border">
        <ListGroup variant="flush" as="ol" numbered>
          {renderPosts()}
        </ListGroup>
      </Container>
    </>
  );
};

export default Main;
