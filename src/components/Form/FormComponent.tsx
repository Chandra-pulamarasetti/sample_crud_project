import React, { useState } from "react";
import { postType } from "./duck/types";
import { TypedDispatch } from "../../store";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { FormTypes, thunkActions, UpdateSelectors } from "./duck";

const FormComponent: React.FC<FormTypes.FormProps> = ({
  isUpdating,
}: FormTypes.FormProps) => {
  const [data, setData] = useState<postType>({
    id: 1,
    userId: 0,
    title: "",
    body: "",
  });

  const dispatch = useDispatch<TypedDispatch>();
  const { id } = useParams();
  const isLoading = useSelector(UpdateSelectors.isLoading);
  const hasError = useSelector(UpdateSelectors.hasError);
  const errorMsg = useSelector(UpdateSelectors.errorMsg);

  const handleFormData = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.userId || !data.title || !data.body) {
      alert("Please fill the details")
    } else {
      if (isUpdating) {
        dispatch(thunkActions.updatePosts({ ...data, id: Number(id) }));
      } else {
        dispatch(thunkActions.createPosts({ ...data }));
      }
    }
  };
  return (
    <>
      <Container>
        <h1 className="display-6 mb-4 mt-5">
          {isUpdating ? `Update Post - ${id}` : "Create Post"}
          {hasError && <h1>{errorMsg}</h1>}
        </h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>UserId</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter userId"
              data-testid="userId-input"
              onChange={(e) =>
                setData({ ...data, userId: Number(e.target.value) })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter post title"
              data-testid="title-input"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Post description here.."
              rows={3}
              data-testid="body-input"
              onChange={(e) => setData({ ...data, body: e.target.value })}
            />
          </Form.Group>
          <Button
            variant="primary me-2"
            type="submit"
            onClick={handleFormData}
            data-testid="submit-btn"
          >
            {isLoading ? "Submitting...." : "Submit"}
          </Button>
          <Link to="/">
            <Button variant="danger" type="button" data-testid="cancel-btn">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default FormComponent;
