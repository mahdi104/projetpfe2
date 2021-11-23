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
            src={`http://localhost:7000/static/${product.img }`}
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
            {product ? (
                <Link to={`/edit/${product._id }`}>
                  <Button
                      inverted
                      color="green"
                      onClick={() => {
                        dispatch(toggleTrue());
                      }}
                  >
                    Mise à jour
                  </Button>
                </Link>
            ):null}
            {product ? (
                <Button
                    inverted
                    color="red"
                    onClick={() => dispatch(deleteProduct(product._id))}
                >
                  Supprimer
                </Button>
            ):null}



          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Product;