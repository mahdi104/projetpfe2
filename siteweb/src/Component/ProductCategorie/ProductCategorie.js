import React from 'react'
import { useDispatch } from "react-redux";
import { getProductByCategories, deleteProduct, toggleTrue } from "../../JS/action/product";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Product/Product.css"
const ProductCategorie = ({product}) => {
    const  dispatch = useDispatch()
    return (
        <div>
            <Card className="style">
                <Card.Content>
                    <img src={`http://localhost:7000/static/${product.img}`} width="200px" style={{ marginLeft: "30px" }} />
                    <Card.Header>{product.title }</Card.Header>
                    <Card.Meta>{product.description }</Card.Meta>
                    <Card.Description>
                        <strong>{product.details}</strong>
                    </Card.Description>
                    <Card.Description>
                        <strong>{product.categories }</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Link to={`/edit/${product._id}`}>
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
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default ProductCategorie