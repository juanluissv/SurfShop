import React, {useRef, useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import ImageGallery from "react-image-gallery";
import Message from '../components/Message';
import { useGetProductDetailsQuery, useCreateReviewMutation } from '../slices/ProductApiSlice';
import { addToCart } from '../slices/cartSlice';
import 'react-image-gallery/styles/css/image-gallery.css';
import { use } from "react";



const ProductScreen = () => {

    const { id: productId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);



    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState(null);
    const [img4, setImg4] = useState(null);

    const [qty, setQty] = useState(1);

    const [sizee, setSizee] = useState('');
    const [colorr, setColorr] = useState('');
    const [imgg, setImgg] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const { data: product, refetch, error, isLoading } = useGetProductDetailsQuery(productId);

    const [createReview, { isLoading: loadingProductReview }] = useCreateReviewMutation();



    useEffect(() => {
        if(product) {
            setImg1(product?.img1c1);
            setImg2(product?.img2c1);
            setImgg(product?.img1c1);
            setColorr(product?.c1);
            if (product?.gender == 'men') {
            setSizee('s');
            setImg3(product?.img3c1);
            setImg4(product?.img4c1);
            }
            if (product?.gender == 'woman') {
                setSizee('xs');
            }
        }
    }, [product]);


    let images = [
        {
          original: img1,
          thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
          },          
      ];

      if (product?.gender == 'men') {
        images.push({
            original: img3,
            thumbnail: img3,
          });
            images.push({
                original: img4,
                thumbnail: img4,
            });
      }

    const addToCartHandler = () => {        
        dispatch(addToCart({...product, qty, image: imgg, colorOrder: colorr, sizeOrder: sizee, imgg}));
        navigate(`/cart`);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    
        try {
          await createReview({
            productId,
            rating,
            comment,
          }).unwrap();
          refetch();
          toast.success('Review created successfully');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };

    

    const handleColorChange = (color) => {

        if (color == "c1") {
            setImg1(product?.img1c1);
            setImg2(product?.img2c1);
            setImg3(product?.img3c1);
            setImg4(product?.img4c1);
            setImgg(product?.img1c1);
            setColorr(product?.c1);
        } 
        if (color == "c2") {
            setImg1(product?.img1c2);
            setImg2(product?.img2c2);
            setImg3(product?.img3c2);
            setImg4(product?.img4c2);
            setImgg(product?.img1c2);
            setColorr(product?.c2);
        }
        if (color == "c3") {
            setImg1(product?.img1c3);
            setImg2(product?.img2c3);
            setImg3(product?.img3c3);
            setImg4(product?.img4c3);
            setImgg(product?.img1c3);
            setColorr(product?.c3);
        }
        if (color == "c4") {
            setImg1(product?.img1c4);
            setImg2(product?.img2c4);
            setImg3(product?.img3c4);
            setImg4(product?.img4c4);
            setImgg(product?.img1c4);
            setColorr(product?.c4);
        }
    }


    const [activeClass, setActiveClass] = useState('');

    const clickSize = (size) => {
        setActiveClass((prevClass) => (prevClass === size ? '' : size));
        if (product?.gender == 'male') {
            if (size == 'size1') {
                setSizee('s');
            }
            if (size == 'size2') {
                setSizee('m');
            }
            if (size == 'size3') {
                setSizee('l');
            }
            if (size == 'size4') {
                setSizee('xl');
            }
        }
        if (product?.gender == 'female') {
            if (size == 'size1') {
                setSizee('xs');
            }
            if (size == 'size2') {
                setSizee('s');
            }
            if (size == 'size3') {
                setSizee('m');
            }
            if (size == 'size4') {
                setSizee('l');
            }
        }
      };





      const imageGalleryRef = useRef(null);


  return (
    <div><br /><br /><br /><br /><br />
        <div className="breadcrumb-area bg-gray">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="active">product details </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="product-details-area pt-70 pb-115">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {/* <div className="product-details-tab">
                            <div className="pro-dec-big-img-slider"> */}
                                
                                <div className="image-gallery-container">
                                <div ref={imageGalleryRef}>
                                <ImageGallery items={images} />
                                </div>
                                </div>                                
                    </div>


                    
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-content pro-details-content-mrg">
                            <h2>{product?.name}</h2>
                            <div className="product-ratting-review-wrap">
                                <div className="product-ratting-digit-wrap">
                                    <Rating value={product?.rating} />

                                    {/* <div className="product-digit">
                                        <span>{product?.rating}</span>
                                    </div> */}
                                </div>
                                <div className="product-review-order">
                                    <span>{product?.numReviews}  Reviews</span>
                                    {/* <span>242 orders</span> */}
                                </div>
                            </div>
                            <p>{product?.description}</p>
                            <div className="pro-details-price">
                                <span className="new-price">${product?.price}</span>
                                <span className="old-price">$35.72</span>
                            </div>
                            <div className="pro-details-color-wrap">
                                <span>Color:</span>
                                <div className="pro-details-color-content">
                                    <ul>
                                        <li>
                                            <a className={product?.c1} onClick={() => handleColorChange("c1")}>white</a>
                                        </li>
                                        <li>
                                            <a className={product?.c2} onClick={() => handleColorChange("c2")}>green</a>
                                        </li>
                                        <li>
                                            <a className={product?.c3} onClick={() => handleColorChange("c3")}>blue</a>
                                        </li>
                                        <li>
                                            <a className={product?.c4} onClick={() => handleColorChange("c4")}>navy</a>
                                        </li>
                                        {/* <li><a className="mona-lisa active" href="#">lisa</a></li>
                                        <li><a className="cupid" href="#">cupid</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="pro-details-size">
                                <span>Size:</span>
                                <div className="pro-details-size-content">
                                    <ul>
                                        <li onClick={() => clickSize('size1')} className={activeClass === 'size1' ? 'active1' : ''}>
                                        <a style={{ textTransform: 'uppercase' }}>{product?.size1}</a>
                                        </li>
                                        <li onClick={() => clickSize('size2')} className={activeClass === 'size2' ? 'active1' : ''}>
                                        <a style={{ textTransform: 'uppercase' }}>{product?.size2}</a>
                                        </li>
                                        <li onClick={() => clickSize('size3')} className={activeClass === 'size3' ? 'active1' : ''}>
                                        <a style={{ textTransform: 'uppercase' }}>{product?.size3}</a>
                                        </li>
                                        <li onClick={() => clickSize('size4')} className={activeClass === 'size4' ? 'active1' : ''}>
                                        <a style={{ textTransform: 'uppercase' }}>{product?.size4}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pro-details-quality">
                                <span>Quantity:</span>
                                <div className="cart-plus-minus">

                                <select  value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                            {[...Array(product?.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                </select>
                                    {/* <input 
                                        className="cart-plus-minus-box" 
                                        placeholder="1" 
                                        type="number" 
                                        max="100" 
                                        min="1" 
                                        name="qtybutton"  
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                    /> */}
                                </div>
                            </div>
                            <div className="product-details-meta">
                                <ul>
                                    <li><span>Categories:</span> <a >{product?.gender},</a> <a >{product?.category}</a> </li>
                                    {/* <li><span>Tag: </span> <a href="#">Fashion,</a> <a href="#">Mentone</a> , <a href="#">Texas</a></li> */}
                                </ul>
                            </div>
                            <div className="pro-details-action-wrap">
                                <div className="pro-details-add-to-cart">
                                    <a title="Add to Cart" onClick={addToCartHandler}>Add To Cart </a>
                                </div>
                                <div className="pro-details-action">
                                    <a title="Add to Wishlist" href="#"><i className="icon-heart"></i></a>
                                    <a title="Add to Compare" href="#"><i className="icon-refresh"></i></a>
                                    <a className="social" title="Social" href="#"><i className="icon-share"></i></a>
                                    <div className="product-dec-social">
                                        <a className="facebook" title="Facebook" href="#"><i className="icon-social-facebook"></i></a>
                                        <a className="twitter" title="Twitter" href="#"><i className="icon-social-twitter"></i></a>
                                        <a className="instagram" title="Instagram" href="#"><i className="icon-social-instagram"></i></a>
                                        <a className="pinterest" title="Pinterest" href="#"><i className="icon-social-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="description-review-wrapper pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="dec-review-topbar nav mb-45">
                            <a data-bs-toggle="tab" href="#des-details2">Reviews</a>
                        </div>
                        <div className="tab-content dec-review-bottom">
                            <div id="des-details1" className="tab-pane active">
                                <div className="description-wrap scpecCenter">
                                {product?.reviews.length === 0 && <Message>No Reviews</Message>}
                                <ListGroup variant='flush'>
                                    {product?.reviews.map((review) => (
                                        <ListGroup.Item key={review._id}>
                                            <strong>{review.name}</strong>
                                            <Rating value={review.rating} />
                                            <p>{review.createdAt.substring(0, 10)}</p>
                                            <p>{review.comment}</p>
                                        </ListGroup.Item>
                                    ))}
                                    <ListGroup.Item>
                                    <h2>Write a Customer Review</h2>

                                    {loadingProductReview && <Loader />}

                                    {userInfo ? (
                                        <Form onSubmit={submitHandler}>
                                        <Form.Group className='my-2' controlId='rating'>
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control
                                                as='select'
                                                required
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                >
                                                <option value=''>Select...</option>
                                                <option value='1'>1 - Poor</option>
                                                <option value='2'>2 - Fair</option>
                                                <option value='3'>3 - Good</option>
                                                <option value='4'>4 - Very Good</option>
                                                <option value='5'>5 - Excellent</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group className='my-2' controlId='comment'>
                                            <Form.Label>Comment</Form.Label>
                                            <Form.Control
                                            as='textarea'
                                            row='3'
                                            required
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Button
                                            disabled={loadingProductReview}
                                            type='submit'
                                            variant='primary'
                                        >
                                            Submit
                                        </Button>
                                        </Form>
                                    ) : (
                                        <Message>
                                        Please <Link to='/login'>sign in</Link> to write a review
                                        </Message>
                                    )}
                                    </ListGroup.Item>
                                </ListGroup>                                                                        
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ProductScreen














// import { React, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Form, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Rating from '../components/Rating';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import { useGetProductDetailsQuery } from '../slices/ProductApiSlice';
// import { addToCart } from '../slices/cartSlice';

// const ProductScreen = () => {
//     const { id: productId } = useParams();

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [qty, setQty] = useState(1);

//     const { data: product, error, isLoading } = useGetProductDetailsQuery(productId);

//     const addToCartHandler = () => {
//         dispatch(addToCart({...product, qty}));
//         navigate(`/cart`);
//     };

//   return (
//     <>
//         <Link className='btn btn-light my-3' to='/'>
//             Go Back
//         </Link>

//         {isLoading ? (
//             <Loader />
//         ) : error ? ( 
//             <Message variant='danger'>
//                 {error?.data?.message || error.error}
//             </Message>
//         ) : (
//             <>
//         <Row>
//             <Col md={5}>
//                 <Image src={product.image} alt={product.name} fluid />
//             </Col>
//             <Col md={4}>
//                 <ListGroup variant='flush'>
//                     <ListGroup.Item>
//                         <h4>{product.name}</h4>
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         <Rating value={product.rating} text={`${product.numReviews} reviews`} />
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         Price: ${product.price}
//                     </ListGroup.Item>
//                     <ListGroup.Item>
//                         Description: {product.description}
//                     </ListGroup.Item>
//                 </ListGroup>
//             </Col>
//             <Col md={3}>
//                 <Card>
//                     <ListGroup variant='flush'>
//                         <ListGroup.Item>
//                             <Row>
//                                 <Col>  Price: </Col>
//                                 <Col> <strong>${product.price}</strong> </Col>
//                             </Row>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <Row>
//                                 <Col>  Status: </Col>
//                                 <Col> <strong>{product.countInStock > 0 ? 'In Stock' :
//                                 'Out of Stock'}</strong> </Col>
//                             </Row>
//                         </ListGroup.Item>
//                         {product.countInStock > 0 && (
//                             <ListGroup.Item>
//                                 <Row>
//                                     <Col> Qty </Col>
//                                     <Col>
//                                         <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
//                                             {[...Array(product.countInStock).keys()].map((x) => (
//                                                 <option key={x + 1} value={x + 1}>
//                                                     {x + 1}
//                                                 </option>
//                                             ))}
//                                         </Form.Control>

//                                     </Col>
//                                 </Row>
//                             </ListGroup.Item>
//                         )}

//                         <ListGroup.Item>
//                             <Button 
//                                 className='btn-block' 
//                                 type='button' 
//                                 disabled={product.countInStock === 0}
//                                 onClick={addToCartHandler}
//                                 >
//                                 Add to Cart
//                             </Button>
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Card>
//             </Col>
//         </Row>            
//             </>
//         )}

                                               
//     </>
//   )
// }

// export default ProductScreen