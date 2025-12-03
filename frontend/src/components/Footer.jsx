import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {

  return (
    <div>
    <footer id="footer" class="overflow-hidden footer34">
      <div class="container">
        <div class="row">
          <div class="footer-top-area">
            <div class="row d-flex flex-wrap justify-content-between">
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu">                
                  <p>SeaSunset Shop is a leading retailer of Surf inspired Clothes in USA</p>            
                </div>
              </div>
              <div class="col-lg-2 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Quick Links</h5>
                  <ul class="menu-list list-unstyled text-uppercase">
                    <li class="menu-item pb-2">
                      <a >Home</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >About</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Shop</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Blogs</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu text-uppercase">
                  <h5 class="widget-title pb-2">Help & Info Help</h5>
                  <ul class="menu-list list-unstyled">
                    <li class="menu-item pb-2">
                      <a >Track Your Order</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Returns Policies</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Shipping + Delivery</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Contact Us</a>
                    </li>
                    <li class="menu-item pb-2">
                      <a >Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 pb-3">
                <div class="footer-menu contact-item">
                  <h5 class="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">support@seasunset.com</a>
                  </p>
                  <p>If you need support? Just give us a call. <a href="">+55 111 222 333 44</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </footer>    
    <div id="footer-bottom">
      <div class="container">
        <div class="row d-flex flex-wrap justify-content-between">
          <div class="col-md-4 col-sm-6">
            <div class="Shipping d-flex">
              <p>We ship with:</p>
              <div class="card-wrap ps-2">
                <img src="/images/dhl.png" alt="visa" />
                <img src="/images/shippingcard.png" alt="mastercard" />
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="payment-method d-flex">
              <p>Payment options:</p>
              <div class="card-wrap ps-2">
                <img src="/images/visa.jpg" alt="visa" />
                <img src="/images/mastercard.jpg" alt="mastercard" />
                <img src="/images/paypal.jpg" alt="paypal" />
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="copyright">
              <p>© Copyright 2025 SEASUNSET STORE. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer