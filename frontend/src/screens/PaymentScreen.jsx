import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../slices/cartSlice';

const PaymentScreen = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  useEffect(() => {
      if (!shippingAddress.address) {
          navigate('/shipping');
      }
  }, [navigate, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(savePaymentMethod(paymentMethod));
      navigate('/placeorder');
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
                        <li className="active">Payment Method </li>
                    </ul>
                </div>
            </div>
      </div>    

      <div class="container"><br/><br/>
        <Row>
          <Col md={{ span: 8, offset: 4 }}>
            <h2>Select Payment Method</h2>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label as='legend'> Paypal or Creditcard</Form.Label>
                    <Col>
                      <Form.Check
                        className='my-2'
                        type='radio'
                        label='PayPal'
                        id='PayPal'
                        name='paymentMethod'
                        value='PayPal'
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></Form.Check>
                    </Col>
                </Form.Group>
                <Button 
                        type='submit' 
                        className='btn-block checkoutBtn'
                        variant='primary'>
                      <a >Continue</a>            
                    </Button>
              </Form>
          </Col>
        </Row><br/><br/><br/><br/><br/><br/><br/>
      </div>






    </div>
  )
}

export default PaymentScreen
