import React, { useState } from 'react';

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container-fluid px-5">
         <h2 className="title text-center mb-5">OUR PRODUCTS</h2> 
      <div className="row">
        <div className="col-md-4 top_images">
          <div className="product-item">
            <img src="Assets/img/our product image/Interior.webp" alt="Product 1" className="img-fluid Top_images"/>
            <h3 className="product-title"> Coating & Finishing </h3>
          </div>
        </div>
        <div className="col-md-4 top_images">
          <div className="product-item">
            <img src="Assets/img/our product image/industrial.webp" alt="Product 4" className="img-fluid Top_images" />
            <h3 className="product-title"> Industrial Paints </h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <img src="Assets/img/our product image/finishing.webp" alt="Product 5" className="img-fluid" />
            <h3 className="product-title"> Decorative Paints </h3>
          </div>
        </div>
        {/* {showMore && ( */}
          <>
            <div className="col-md-4">
              <div className="product-item">
                <img src="Assets/img/our product image/coaating.webp" alt="Another Product" className="img-fluid" />
                <h3 className="product-title"> Automotive Finishing </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-item">
                <img src="Assets/img/our product image/paint.webp" alt="Another Product" className="img-fluid" />
                <h3 className="product-title">  Thinners </h3>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="product-item">
                <img src="Assets/img/our product image/close-up-photo-painting-wood-brown-color.webp" alt="Another Product" className="img-fluid" />
                <h3 className="product-title">  Miscellaneous
                Paints </h3>
              </div>
            </div> */} 
          </>
        {/* )} */}
      </div>
      {/* <div className="text-center ">
        <button className="show-more-btn" onClick={toggleShowMore}>
          {showMore ? 'Hide' : 'Show More'}
        </button>
      </div> */}
    </div>
  );
};

export default Products;
