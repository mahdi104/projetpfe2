import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import  Message  from "./Message";
import { addToCart,removeFromCart } from "../../JS/action/Cart";
import {  getProductById} from "../../JS/action/product";
import supprimer from "../../Assets/image/delete.png"

const Cart = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cartItems)
    const [state, setstate] = useState(qty)
    // const  {cartItems}  = cart
    useEffect(() => {
      dispatch(getProductById)
    }, [])
    // useEffect(() => {
    //     if (productId) {
    //         dispatch(addToCart(productId, qty))
    //     }
    // }, [dispatch, productId, qty])
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        alert("Votre demande de devis à été envoyé avec succés")
    }
    return (
        <div>
            <Row>
                <Col md={8}>
                    <h2>Liste des achats</h2>
                    {cart.length === 0 ? (
                        <Message>
                            Votre panier est vide <Link to='/'>Retour</Link>
                        </Message>
                    ) : (
                    <ListGroup variant='flush'>
                        {cart.map((item) => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={`http://localhost:7000/static/${item.img}`} alt={item.title} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.title}</Link>
                                </Col>                   
                                <Col md={2}></Col>
                                <Col md={2}>
                                  <input value={state}/>
                                  {console.log(item)}
                                  {/* <button onClick={()=>{addToCart(item,qty+1)}}>+</button> */}
                  </Col>
                  <Col md={2}>
                    {/* <Button
                      type='button'
                      variant='dark'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i class="fas fa-trash-alt"></i> */}

                    {/* </Button> */}
                    <img src={supprimer} alt="delete" onClick={() => removeFromCartHandler(item.product)} width="20%"/>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Total ({cart.reduce((acc, item) => acc + item.qty, 0)})
                
              </h2>
             
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cart.length === 0}
                onClick={checkoutHandler}
              >
                Soumettre votre devis
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </div>
    )
}

export default Cart