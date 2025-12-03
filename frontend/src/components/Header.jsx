import React from 'react';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();


  const logoutHandler = async () => {
    try{
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart())
      navigate('/login');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <> 
    <header className="header-area transparent-bar section-padding-1">
            <div className="container-fluid">
                <div className="header-large-device">                   
                    <div className="header-bottom">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                    <LinkContainer to="/">
                                    <img src="/images/sea.png" alt="logo" className='logImg' />
                                    </LinkContainer>
                                    </a>
                                </div>                              
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="main-menu main-menu-padding-1 main-menu-lh-1">
                                    <nav>
                                        <ul>
                                            <li>
                                                <LinkContainer to="/"><a>HOME</a></LinkContainer>
                                             
                                                {/* <ul className="sub-menu-style">
                                                    <li><a href="index.html">Home version 1 </a></li>
                                                    <li><a href="index-2.html">Home version 2</a></li>
                                                    <li><a href="index-3.html">Home version 3</a></li>
                                                    <li><a href="index-4.html">Home version 4</a></li>
                                                    <li><a href="index-5.html">Home version 5</a></li>
                                                    <li><a href="index-6.html">Home version 6</a></li>
                                                    <li><a href="index-7.html">Home version 7</a></li>
                                                    <li><a href="index-8.html">Home version 8</a></li>
                                                    <li><a href="index-9.html">Home version 9</a></li>
                                                    <li><a href="index-10.html">Home version 10</a></li>
                                                </ul> */}
                                            </li>
                                            <li>
                                            <LinkContainer to="/shop"><a>SHOP </a></LinkContainer>
                                                {/* <ul className="mega-menu-style mega-menu-mrg-1">
                                                    <li>
                                                        <ul>
                                                            <li>
                                                                <a className="dropdown-title" href="#">Shop Layout</a>
                                                                <ul>
                                                                    <li><a href="shop.html">standard style</a></li>
                                                                    <li><a href="shop-list.html">shop list style</a></li>
                                                                    <li><a href="shop-fullwide.html">shop fullwide</a></li>
                                                                    <li><a href="shop-no-sidebar.html">grid no sidebar</a></li>
                                                                    <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                                                    <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                                    <li><a href="store-location.html">store location</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-title" href="#">Products Layout</a>
                                                                <ul>
                                                                    <li><a href="product-details.html">tab style 1</a></li>
                                                                    <li><a href="product-details-2.html">tab style 2</a></li>
                                                                    <li><a href="product-details-sticky.html">sticky style</a></li>
                                                                    <li><a href="product-details-gallery.html">gallery style </a></li>
                                                                    <li><a href="product-details-affiliate.html">affiliate style</a></li>
                                                                    <li><a href="product-details-group.html">group style</a></li>
                                                                    <li><a href="product-details-fixed-img.html">fixed image style </a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="shop.html"><img src="../assets/images/banner/banner-12.png" alt="" /></a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            {/* <li><a href="#">PAGES </a>
                                                <ul className="sub-menu-style">
                                                    <li><a href="about-us.html">about us </a></li>
                                                    <li><a href="cart.html">cart page</a></li>
                                                    <li><a href="checkout.html">checkout </a></li>
                                                    <li><a href="my-account.html">my account</a></li>
                                                    <li><a href="wishlist.html">wishlist </a></li>
                                                    <li><a href="compare.html">compare </a></li>
                                                    <li><a href="contact.html">contact us </a></li>
                                                    <li><a href="order-tracking.html">order tracking</a></li>
                                                    <li><a href="login-register.html">login / register </a></li>
                                                </ul>
                                            </li> */}
                                            <li><LinkContainer to="/"><a >BLOG </a></LinkContainer>
                                                {/* <ul className="sub-menu-style">
                                                    <li><a href="blog.html">blog standard </a></li>
                                                    <li><a href="blog-no-sidebar.html">blog no sidebar </a></li>
                                                    <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                </ul> */}
                                            </li>
                                            <li><LinkContainer to="/"><a >CONTACT </a></LinkContainer></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="header-action header-action-flex header-action-mrg-right">
                                    <div className="same-style-2 header-search-1">
                                        <a className="search-toggle" href="#">
                                            <i className="icon-magnifier s-open"></i>
                                            <i className="icon_close s-close"></i>
                                        </a>
                                        <div className="search-wrap-1">
                                            <form action="#">
                                                <input placeholder="Search products…" type="text" />
                                                <button className="button-search"><i className="icon-magnifier"></i></button>
                                            </form>
                                        </div>
                                    </div>

                                    

                                    <div className="">
                                        
                                        <i className="icon-user same-style-2"></i>
                                        

                                    { userInfo ? (  
                                    <>
                                    <NavDropdown  title={userInfo.name} id='username' className='userInfo'>
                                        <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    </>
                                    ) : (
                                    <LinkContainer to="/login">
                                    <Nav.Link className='userInfo'>  Sign In &nbsp;</Nav.Link>
                                    </LinkContainer>
                                    )}

                                    

                                    </div>


                                    <div className="">
                                    { userInfo && userInfo.isAdmin && (
                                        <NavDropdown title='Admin' id='adminmenu' className=''>
                                        <LinkContainer to='/admin/userlist'>
                                            <NavDropdown.Item>Users</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/productlist'>
                                            <NavDropdown.Item>Products</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/admin/orderlist'>
                                            <NavDropdown.Item>Orders</NavDropdown.Item>
                                        </LinkContainer>
                                        </NavDropdown>
                                    )}

                                    </div>


                                    
                                    <div className="same-style-2 header-cart">
                                        <a className="cart-active">
                                        &nbsp; &nbsp; <LinkContainer to="/cart">
                                            <i className="icon-basket-loaded"></i></LinkContainer> 
                                            <span className="pro-count red">
                                            
                                            <span> {cartItems.reduce((a, c) => a + c.qty, 0)}</span>         
                                                                         
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-small-device small-device-ptb-1">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="mobile-logo">
                                <a href="index.html">
                                    <img alt="" src="assets/images/logo/logo.png" />
                                </a>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="header-action header-action-flex">
                                <div className="same-style-2">
                                    <a href="login-register.html"><i className="icon-user"></i></a>
                                </div>
                                <div className="same-style-2">
                                    <a href="wishlist.html"><i className="icon-heart"></i><span className="pro-count red">03</span></a>
                                </div>
                                <div className="same-style-2 header-cart">
                                    <a className="cart-active" href="#">
                                        <i className="icon-basket-loaded"></i><span className="pro-count red">02</span>
                                    </a>
                                </div>
                                <div className="same-style-2 main-menu-icon">
                                    <a className="mobile-header-button-active" href="#"><i className="icon-menu"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
  )
}

export default Header











// import React from 'react';
// import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
// import { FaShoppingCart, FaUser } from 'react-icons/fa'
// import { Link, useNavigate } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
// import { resetCart } from '../slices/cartSlice';

// const Header = () => {
//   const { cartItems } = useSelector(state => state.cart);
//   const { userInfo } = useSelector(state => state.auth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try{
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       dispatch(resetCart())
//       navigate('/login');
//     } catch(err) {
//       console.log(err);
//     }
//   }

//   return (
//     <header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
//       <Navbar id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
//         <div class="container-fluid">
//           <LinkContainer to="/">
//             <Navbar.Brand>
//               <img src="https://png.pngtree.com/png-vector/20221222/ourmid/pngtree-blue-technological-sense-glowing-brain-png-image_6503119.png"  className='log11' alt="logo" width="45px" />
//               <span >Techshop</span>
//             </Navbar.Brand>       
//           </LinkContainer>   
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-5 customMenu">
//               <LinkContainer to="/cart" >
//                 <Nav.Link className=''> <FaShoppingCart /> Cart
//                     {
//                       cartItems.length > 0 && (
//                         <Badge pill bg='success' style={{ marginLeft: '5px' }}>
//                           {cartItems.reduce((a, c) => a + c.qty, 0)}
//                         </Badge>  
//                       )
//                     }
//                 </Nav.Link>
//               </LinkContainer>
//               { userInfo ? (  
//                 <>
//                   <NavDropdown title={userInfo.name} id='username'>
//                     <LinkContainer to='/profile'>
//                       <NavDropdown.Item>Profile</NavDropdown.Item>
//                     </LinkContainer>
//                     <NavDropdown.Item onClick={logoutHandler}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </>
//                 ) : (
//                 <LinkContainer to="/login">
//                   <Nav.Link> <FaUser /> Sign In</Nav.Link>
//                 </LinkContainer>
//               )}
//               { userInfo && userInfo.isAdmin && (
//                 <NavDropdown title='Admin' id='adminmenu'>
//                   <LinkContainer to='/admin/userlist'>
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to='/admin/productlist'>
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to='/admin/orderlist'>
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>                               
//         </div>
//       </Navbar>
//     </header>
//   )
// }

// export default Header