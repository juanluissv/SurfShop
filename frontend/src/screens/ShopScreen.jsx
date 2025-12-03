import { React, useEffect, useState} from 'react';
import { Col,Form, Button, Row, Nav, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/ProductApiSlice';
import { useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Collection from '../components/Collection';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';

const ShopScreen = () => {

    const navigate = useNavigate();
    const { pageNumber, keywordd} = useParams();

    const [page, setPage] = useState(1)
    
    const [keyword2, setKeyword2] = useState();
    
    const { data: data2, isLoading, error } = useGetProductsQuery({pageNumber, keywordd}); 

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/shop/page/1/${keyword2}`);
    }


    const handleChange = (key, property  ) => {
        navigate(`/shop/page/1/${key}`);
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
                        <li className="active">Shopping </li>
                    </ul>
                </div>
            </div>
        </div>


        <div class="shop-area pt-80 pb-80">
            <div class="container">
                <div class="row ">

                <div class="col-lg-3">
                        <div class="sidebar-wrapper sidebar-wrapper-mrg-right">
                            <div class="sidebar-widget mb-40">
                                <h4 class="sidebar-widget-title">Search </h4>
                                <div class="sidebar-search">
                                    <form onSubmit={handleSearch} class="sidebar-search-form" >
                                        <input 
                                            type="text" 
                                            placeholder='Search Products...'
                                            onChange={(e) => setKeyword2(e.target.value)}
                                            value={keyword2}
                                            />
                                        <button type='submit'>
                                            <i class="icon-magnifier"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar-widget shop-sidebar-border mb-35 pt-40">
                                <h4 class="sidebar-widget-title">Categories </h4>
                                <div class="shop-catigory">
                                    <ul>
                                        <li onClick={() => handleChange('')}><a >All</a></li>
                                        <li onClick={() => handleChange('men', 'gender' )}><a >Men</a></li>
                                        <li onClick={() => handleChange( 'female', 'gender')}><a >Female</a></li>                                        
                                    </ul>
                                </div>
                            </div> 
                            <div class="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                <h4 class="sidebar-widget-title">Color </h4>
                                <div class="shop-catigory">
                                <ul>
                                    <li onClick={() => handleChange('')}><a >All</a></li>
                                    <li onClick={() => handleChange('grey', 'color'  )}><a >Grey</a></li>
                                    <li onClick={() => handleChange('pacific', 'color'  )}><a >Pacific</a></li>
                                    <li onClick={() => handleChange('navy', 'color'  )}><a >Navy</a></li>
                                    <li onClick={() => handleChange('white', 'color'  )}><a >White</a></li>
                                    <li onClick={() => handleChange('charcoal', 'color'  )}><a >Charcoal</a></li>    
                                    <li onClick={() => handleChange('mint', 'color'  )}><a >Mint</a></li>                                        
                                    <li onClick={() => handleChange('turqoise', 'color'  )}><a >Turqoise</a></li>                                        
                                    <li onClick={() => handleChange('indigo', 'color'  )}><a >Indigo</a></li>                                        
                                    <li onClick={() => handleChange('purple', 'color'  )}><a >Purple</a></li>                                        
                                    <li onClick={() => handleChange('royal', 'color'  )}><a >Royal</a></li>                                        

                                    </ul>
                                </div>
                            </div>                           
                            <div class="sidebar-widget shop-sidebar-border mb-40 pt-40">
                                <h4 class="sidebar-widget-title">Size </h4>
                                <div class="shop-catigory">
                                    <ul>
                                    <li onClick={() => handleChange('')}><a >All</a></li>
                                    <li onClick={() => handleChange('xs', 'size'  )}><a >Extra Small</a></li>
                                    <li onClick={() => handleChange('s', 'size'  )}><a >Small</a></li>
                                    <li onClick={() => handleChange('m', 'size'  )}><a >Medium</a></li>
                                    <li onClick={() => handleChange('l', 'size'  )}><a >Large</a></li>
                                    <li onClick={() => handleChange('xl', 'size'  )}><a >Extra Large</a></li>                                        
                                    </ul>
                                </div>
                            </div>                                                        
                        </div>
                    </div>

                    <div class="col-lg-9">
                        <div class="shop-topbar-wrapper">
                            <div class="shop-topbar-left shopShowing">
                                <p >page  {data2?.page} of {data2?.pages}  - showing {data2?.products.length} of {data2?.count} results </p>
                            </div>                            
                        </div>
                        <div class="shop-bottom-area">
                            <div class="tab-content jump">
                                <div id="shop-1" class="tab-pane active">
                                    <div class="row">
                                    { isLoading ? (
                                        <Loader />
                                    ) : error ? (
                                    <Message variant='danger'>
                                            {error?.data?.message || error.error}
                                        </Message>
                                        ) : (        
                                            <>                                
                                        {data2?.products.map((product) => (
                                        <Col key={product._id}  sm={12} md={6} lg={4} xl={4}>
                                            <Product product={product} />
                                        </Col>                                    
                                        ))} 
                                        </>
                                    ) }                                            
                                    </div>
                                <div class="row">
                                   
                                    <Col  xl={{  offset: 5 }}>
                                    <br />
                                    <Paginate
                                                pages={data2?.pages}
                                                page={data2?.page}
                                                keywordd={keywordd ? keywordd : ''}
                                                className='pagCenter'                                                
                                            />
                                    </Col>
                                </div>
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

export default ShopScreen
