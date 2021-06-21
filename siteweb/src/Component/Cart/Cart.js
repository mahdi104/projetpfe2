import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import  Message  from "./Message";
import { addToCart,removeFromCart } from "../../JS/action/Cart";
import {  getProductById} from "../../JS/action/product";

const Cart = ({ match, location, history }) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cartItems)
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
        history.push('/login?redirect=signin')
    }
    return (
        <div>
            <Row>
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cart.length === 0 ? (
                        <Message>
                            Your cart is empty <Link to='/'>Go Back</Link>
                        </Message>
                    ) : (
                    <ListGroup variant='flush'>
                        {cart.map((item) => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.img} alt={item.title} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.title}</Link>
                                </Col>                   
                                <Col md={2}></Col>
                                <Col md={2}>
                                    <Form.Control 
                                    as='select'
                                    value={item.qty}
                                    onChange={(e) =>
                                        dispatch(
                                            addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
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
                Subtotal ({cart.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cart
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cart.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
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