import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    console.log(cartItems);

    const addToCartHandler = (product, qty) => {
        dispatch(addToCart({...product, qty }));
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const checkOutHandler = () => {
        navigate('/login?redirect=/shipping');
    }



  return (
    <div class=""><br/><br/><br/><br/><br/>
    

    
    <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Shopping Cart </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
        <Row>
         <Col md={8}><br/><br/>

         <h3 class="cart-page-title ">
            <span className='cartTitle'>Shopping Cart</span>
            </h3><br/><br/>
             {cartItems.length === 0 ? (
                <Message>
                    Your cart is empty <Link to='/'>Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant='flush'>
                    {cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={3}>
                                    <Image src={item.imgg} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>${item.price}</Col>
                                <Col md={2}>
                                    <Form.Control
                                        as='select' 
                                        value={item.qty}
                                        onChange={(e) => 
                                            addToCartHandler(item, Number(e.target.value))
                                        }
                                    >
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x+1} value={x+1}>
                                                {x+1}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={1}>
                                    <Button 
                                        type='button' 
                                        variant='light' 
                                        onClick={() => removeFromCartHandler(item._id)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={4}><br/><br/>
        
            <div class="grand-totall">
                                    <div class="title-wrap">
                                        <h4 class="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                    </div>
                                    <h5>Subtotal <span>
                                    ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                                    ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}

                                        </span></h5>
                                    {/* <div class="total-shipping">
                                        <h5>Total shipping</h5>
                                        <ul>
                                            <li><input type="checkbox" /> Standard <span>$20.00</span></li>
                                            <li><input type="checkbox" /> Express <span>$30.00</span></li>
                                        </ul>
                                    </div> */}
                                    {/* <h4 class="grand-totall-title">Grand Total <span>$260.00</span></h4> */}
                                    {/* <a href="#">
                                        Proceed to Checkout
                                    </a> */}
                                    <Button
                                        type='button'
                                        className='btn-block checkoutBtn2'
                                        disabled={cartItems.length === 0}
                                        onClick={checkOutHandler}
                                    >
                                        Proceed To Checkout
                                    </Button>
                                </div>
        </Col>
        </Row>
        </div>
    <br/><br/><br/><br/><br/><br/><br/>

      
    </div>
  )
}

export default CartScreen





















// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
// import { FaTrash } from 'react-icons/fa';
// import Message from '../components/Message';
// import { addToCart, removeFromCart } from '../slices/cartSlice';

// const CartScreen = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const cart = useSelector((state) => state.cart);
//     const { cartItems } = cart;

//     const addToCartHandler = (product, qty) => {
//         dispatch(addToCart({...product, qty }));
//     }

//     const removeFromCartHandler = (id) => {
//         dispatch(removeFromCart(id));
//     }

//     const checkOutHandler = () => {
//         navigate('/login?redirect=/shipping');
//     }
    
//     return (
//     <Row>
//         <Col md={8}>
//             <h2 style={{ marginBottom: '20px'}}>Shopping Cart</h2>
//             {cartItems.length === 0 ? (
//                 <Message>
//                     Your cart is empty <Link to='/'>Go Back</Link>
//                 </Message>
//             ) : (
//                 <ListGroup variant='flush'>
//                     {cartItems.map((item) => (
//                         <ListGroup.Item key={item._id}>
//                             <Row>
//                                 <Col md={2}>
//                                     <Image src={item.image} alt={item.name} fluid rounded/>
//                                 </Col>
//                                 <Col md={3}>
//                                     <Link to={`/product/${item._id}`}>{item.name}</Link>
//                                 </Col>
//                                 <Col md={2}>${item.price}</Col>
//                                 <Col md={2}>
//                                     <Form.Control
//                                         as='select' 
//                                         value={item.qty}
//                                         onChange={(e) => 
//                                             addToCartHandler(item, Number(e.target.value))
//                                         }
//                                     >
//                                         {[...Array(item.countInStock).keys()].map((x) => (
//                                             <option key={x+1} value={x+1}>
//                                                 {x+1}
//                                             </option>
//                                         ))}
//                                     </Form.Control>
//                                 </Col>
//                                 <Col md={2}>
//                                     <Button 
//                                         type='button' 
//                                         variant='light' 
//                                         onClick={() => removeFromCartHandler(item._id)}
//                                     >
//                                         <FaTrash />
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </ListGroup.Item>
//                     ))}
//                 </ListGroup>
//             )}
//         </Col>
//         <Col md={4}>
//             <Card>
//                 <ListGroup variant='flush'>
//                     <ListGroup.Item>
//                         <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h3>
//                         ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         <Button
//                             type='button'
//                             className='btn-block checkoutBtn'
//                             disabled={cartItems.length === 0}
//                             onClick={checkOutHandler}
//                         >
//                             Proceed To Checkout
//                         </Button>
//                     </ListGroup.Item>
//                 </ListGroup>
//             </Card>
//         </Col>
//     </Row>
//   )
// }

// export default CartScreen
