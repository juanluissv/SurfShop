import React from 'react'

const Slider = () => {
  return (
    <div className="slider-area bg-gray">
    <div className="hero-slider-active-1 hero-slider-pt-1 nav-style-1 dot-style-1">
        <div className="single-hero-slider single-animation-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-slider-content-1 hero-slider-content-1-pt-1 slider-animated-1">
                            <h4 className="animated">New Arrivals</h4>
                            <h1 className="animated">Unique Surf Inspired <br />Clothes</h1>
                            <p className="animated">Discover our collection with the best surf inspired themes. Surf is never out of trend.</p>
                            <div className="btn-style-1">
                                <a className="animated btn-1-padding-1" href="product-details.html">Explore Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-slider-img-1 slider-animated-1">
                            <img className="animated" src="/images/men/home/img4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="single-hero-slider single-animation-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-slider-content-1 hero-slider-content-1-pt-1 slider-animated-1">
                            <h4 className="animated">New Arrivals</h4>
                            <h1 className="animated">Leather Simple <br/>Backpacks</h1>
                            <p className="animated">Discover our collection with leather simple backpacks. Less is more never out trend.</p>
                            <div className="btn-style-1">
                                <a className="animated btn-1-padding-1" href="product-details.html">Explore Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-slider-img-1 slider-animated-1">
                            <img className="animated" src="assets/images/slider/hm-1-slider-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
</div>
  )
}

export default Slider
