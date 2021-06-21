import React from "react";
import { useDispatch } from "react-redux";
import { getProduct, deleteProduct, toggleTrue } from "../../JS/action/product";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Product.css";
import { update } from "../../JS/action/user";
const Product = ({ product, user }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card className="style">
        <Card.Content>
          <img
            src={`http://localhost:7000/static/${product.img || user.img}`}
            width="200px"
            style={{ marginLeft: "30px" }}
          />
          <Card.Header>{product.title || user.etablissement}</Card.Header>
          <Card.Meta>{product.description || user.firstname}</Card.Meta>
          <Card.Description>
            <strong>{product.details || user.email}</strong>
          </Card.Description>
          <Card.Description>
            <strong>{product.categories || user.lastname}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link to={`/edit/${product._id || user._id}`}>
              <Button
                inverted
                color="green"
                onClick={() => {
                  dispatch(toggleTrue());
                }}
              >
                Edit
              </Button>
            </Link>
            <Button
              inverted
              color="red"
              onClick={() => dispatch(deleteProduct(product._id))}
            >
              Delete
            </Button>
            {user.status === "active" ? (
              <Button
                color="black"
                onClick={() =>
                  dispatch(update(user._id, { status: "desactive" }))
                }
              >
                block
              </Button>
            ) : null}
            {user.status === "desactive" ? (
              <Button
                color="black"
                onClick={() => dispatch(update(user._id, { status: "active" }))}
              >
                Deblock
              </Button>
            ) : null}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Product;