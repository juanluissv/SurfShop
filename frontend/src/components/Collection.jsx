import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

const Collection = () => {
  return (
    <div>

        <div class="banner-area pb-85">
            <div class="container">
                <div class="section-title mb-45">
                    <h2>Our Collections</h2>
                </div>
                <div class="row">
                    <div class="col-lg-7 col-md-7">
                        <div class="banner-wrap banner-mr-1 mb-30">
                            <div class="banner-img banner-img-zoom">
                                <a href="product-details.html">
                                    <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VyZmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </a>
                            </div>
                            <div class="banner-content-1">
                                <h2> Surf inspired <br />Shirts</h2>
                                <p>Stretch, fresh-cool and comfortable</p>
                                <div class="btn-style-1">
                                 <a class="animated btn-1-padding-2" href=""><LinkContainer to="/shop"> 
                                 <span>Shop Now</span></LinkContainer></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-5">
                        <div class="banner-wrap  banner-ml-1 mb-30">
                            <div class="banner-img banner-img-zoom">
                                <a href="product-details.html">
                                    <img src="https://www.everydaycalifornia.com/cdn/shop/articles/unnamed_b651c77e-81f9-4ed5-8365-35de4cb15ec4.jpg?v=1664908760&width=780" alt="" /></a>
                            </div>
                            <div class="banner-content-22">
                                {/* <h2>Best Colors and Designs</h2> */}
                                <h4 className='bann2'> We celebrate Surf Culture </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Collection
