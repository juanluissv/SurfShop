import { React } from 'react';
import { Col, Row, Nav, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import Product from '../components/Product';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Collection from '../components/Collection';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {

  const { pageNumber } = useParams();

  const { data: data2, isLoading, error } = useGetProductsQuery({pageNumber}); 

  return (
    <>
    { isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>
        {error?.data?.message || error.error}
      </Message>
    ) : (
      <>
        <Slider />
        <Services />

        <div className="product-area section-padding-1 pt-55 pb-75">
        <div class="container">
        <Row>
          <div class="section-title-tab-wrap mb-45">
                    <div class="section-title">
                        <h2>Featured Products</h2>
                    </div>
                    <div class="tab-style-1 nav">
                        <a class="active" href="#product-1" data-bs-toggle="tab">Best Seller</a>
                        <a href="#product-2" data-bs-toggle="tab"> Trending</a>
                        <a href="#product-3" data-bs-toggle="tab">New Arrivals </a>
                        <a href="#product-4" data-bs-toggle="tab">All Products</a>
                    </div>
          </div>
        {data2.products.map((product) => (
            <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
        </Row>
        </div>
        </div>

        <Collection />
      </>
    ) } 

    </>
  )
}

export default HomeScreen