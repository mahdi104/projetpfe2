import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { currentUser } from '../../JS/action/user';
 import { addToCart } from "../../JS/action/Cart";
import { Button, Card } from "semantic-ui-react";

import { Link } from "react-router-dom";
import "../Product/Product.css"

const ProductUser = ({product}) => {
  const user = useSelector((state) => state.userReducer.user);
  const isUser = useSelector((state) => state.userReducer.isUser);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(currentUser());
    }, []);
  
    return (
        <div>
            <Card className="style">
                <Card.Content>
                    <img
                    src={`http://localhost:7000/static/${product.img}`}
            width="200px"
            style={{ marginLeft: "30px" }}
          />
          <Card.Header>{product.title }</Card.Header>
          <Card.Meta>{product.description }</Card.Meta>
          <Card.Description>
            <strong>{product.details}</strong>
          </Card.Description>
          <Card.Description>
            <strong>{product.categories}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link to={`/cart/${product._id }`}>
{isUser?              <Button
                inverted
                color="green"
                onClick={() => {
                  dispatch( addToCart(product,1));
                }}
              >
                Ajouter au panier
              </Button>: <Link to="/signin">
                    <Button variant="outline-info" className="style-btn">
                    se Connecter pour ajouter vos produits au panier
                    </Button>
                  </Link>}

            </Link>
          </div>
        </Card.Content>
      </Card>
        </div>
    )
}

export default ProductUser
