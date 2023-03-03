import React from 'react'
import { Col, Row } from 'antd';
import { Carousel } from 'antd';

import image1 from '../../assests/images/banner-img1.jpg';
import image2 from '../../assests/images/banner-img2.jpg';
import image3 from '../../assests/images/banner-img3.jpg';
function card() {
  return (
    <div className='CardBlock'>
    <Row gutter={[24, 24]}>
      {/* carousel */}
      <Col xs={24} lg={18}>
        <Carousel autoplay>
          <div>
            <img src={image1} alt="banner 1" />
          </div>
          <div>
            <img src={image2} alt="banner 2" />
          </div>
          <div>
            <img src={image3} alt="banner 3" />
          </div>
        </Carousel>
      </Col>
      {/* Card blocks */}
      <Col xs={24} lg={6}>
        <div className='CardBlocks'>
          <div className='holder'>
            <div className='icon'>
              <i className="fa-solid fa-truck"></i> 
            </div>
            <div className='content'>
              <h3>Free Shipping &amp; Return</h3>
              <p>Free shipping on orders over 200/- </p>
            </div>
          </div>
          <div className='holder'>
            <div className='icon'>
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </div>
         
            <div className='content'>
              <h3>Money Back Guarantee</h3>
              <p>100% money back guarantee</p>
            </div>
          </div>
          <div className='holder'>
            <div className='icon'>
              <i className="fa-solid fa-headset"></i> 
            </div>
            <div className='content'>
              <h3>Online Support 24/7</h3>
             
            </div>
          </div>
        </div>  
      </Col>
    </Row>
  </div>

  )
}

export default card