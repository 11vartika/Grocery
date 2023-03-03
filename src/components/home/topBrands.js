import React from 'react'
import { Col, Row } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assests/images/img9.jpg'),
  },
  {
    key: '2',
    image: require('../../assests/images/img10.jpg'),
  },
  {
    key: '3',
    image: require('../../assests/images/img11.jpg'),
  },
  {
    key: '4',
    image: require('../../assests/images/img9.jpg'),
  }
]
function TopBrands() {
  return (
    <div className="block products">
    <h2>Top Brands</h2>
    <Row gutter={[24, 24]}>
      {products.map(product => {
        return (
          <Col xs={{ span: 12 }} sm={{ span: 6 }} key={product.key}>
            <div className="content">
              <div className="image">
                <img src={product.image} alt="product" />
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  </div>
  )
}

export default TopBrands