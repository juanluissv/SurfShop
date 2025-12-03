import { useState, React } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../slices/cartSlice';


const ShippingScreen = () => {

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
  const [country, setCountry] = useState(shippingAddress.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  }


  return (
    <div><br/><br/><br/><br/><br/>
      <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">Shipping Address </li>
                    </ul>
                </div>
            </div>
      </div>
      <div class="container">
        <div class="checkout-wrap pt-30">
          <div class="billing-info-wrap mr-50">
            <Row>
              <Col md={{ span: 9, offset: 2 }}>
                <h2>Shipping Address</h2>
                <Form onSubmit={submitHandler}>
                  <br/>
                  <div class="col-lg-12">
                      <div class="billing-info mb-20">
                      <label>Address <abbr class="required" title="required">*</abbr></label>
                        <input 
                          class="billing-address" 
                          placeholder="Enter Street Address" 
                          type="text"
                          value={address}
                          required
                          onChange={(e) => setAddress(e.target.value)}
                          />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="billing-info mb-20">
                      <label>City <abbr class="required" title="required">*</abbr></label>
                        <input 
                          class="billing-address" 
                          placeholder="Enter City" 
                          type="text"
                          value={city}
                          required
                          onChange={(e) => setCity(e.target.value)}
                          />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="billing-info mb-20">
                      <label>Postal Code <abbr class="required" title="required">*</abbr></label>
                        <input 
                          class="billing-address" 
                          placeholder='Enter postal code'
                          type="text"
                          value={postalCode}
                          required
                          onChange={(e) => setPostalCode(e.target.value)}
                          />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="billing-info mb-20">
                      <label>Country <abbr class="required" title="required">*</abbr></label>
                        <input 
                          class="billing-address" 
                          placeholder='Enter country'
                          type="text"
                          value={country}
                          required
                          onChange={(e) => setCountry(e.target.value)}
                          />
                      </div>
                    </div>
                    <Col lg={{ span: 8, offset: 4 }}>
                      <Button 
                        type='submit' 
                        className='btn-block checkoutBtn'
                        variant='primary'>
                      <a >Continue</a>            
                    </Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default ShippingScreen



















// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import FormContainer from '../components/FormContainer';
// import CheckoutSteps from '../components/CheckoutSteps';
// import { saveShippingAddress } from '../slices/cartSlice';

// const ShippingScreen = () => {
//   const cart = useSelector((state) => state.cart);
//   const { shippingAddress } = cart;

//   const [address, setAddress] = useState(shippingAddress.address || '');
//   const [city, setCity] = useState(shippingAddress.city || '');
//   const [postalCode, setPostalCode] = useState(
//     shippingAddress.postalCode || ''
//   );
//   const [country, setCountry] = useState(shippingAddress.country || '');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(saveShippingAddress({ address, city, postalCode, country }));
//     navigate('/payment');
//   };

//   return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 />
//       <h1>Shipping</h1>
//       <Form onSubmit={submitHandler}>
//         <Form.Group className='my-2' controlId='address'>
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter address'
//             value={address}
//             required
//             onChange={(e) => setAddress(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group className='my-2' controlId='city'>
//           <Form.Label>City</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter city'
//             value={city}
//             required
//             onChange={(e) => setCity(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group className='my-2' controlId='postalCode'>
//           <Form.Label>Postal Code</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter postal code'
//             value={postalCode}
//             required
//             onChange={(e) => setPostalCode(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group className='my-2' controlId='country'>
//           <Form.Label>Country</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter country'
//             value={country}
//             required
//             onChange={(e) => setCountry(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Button type='submit' variant='primary'>
//           Continue
//         </Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default ShippingScreen;
