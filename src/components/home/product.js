import React from 'react'
import { Col, Row } from 'antd';

const productCategories = [
  {
    key: '1',
    image: require('../../assests/images/img15.jpg'),
    title: 'Frozen'
  },
  {
    key: '2',
    image: require('../../assests/images/img16.jpg'),
    title: 'Fresh'
  },
  {
    key: '3',
    image: require('../../assests/images/img17.jpg'),
    title: 'Food Cupboard'
  },
  {
    key: '4',
    image: require('../../assests/images/img18.jpg'),
    title: 'Household'
  },
  {
    key: '5',
    image: require('../../assests/images/img19.jpg'),
    title: 'Drinks'
  },
  {
    key: '6',
    image: require('../../assests/images/img20.jpg'),
    title: 'Bakery'
  },
  {
    key: '7',
    image: require('../../assests/images/img21.jpg'),
    title: 'Fresh Fruits'
  },
  {
    key: '8',
    image: require('../../assests/images/img22.jpg'),
    title: 'Hot Buys'
  },
  {
    key: '9',
    image: require('../../assests/images/img23.jpg'),
    title: 'Offers'
  },
  {
    key: '10',
    image: require('../../assests/images/img24.jpg'),
    title: 'Luxury'
  },
  {
    key: '11',
    image: require('../../assests/images/img25.jpg'),
    title: 'Beers & Wines'
  },
  {
    key: '12',
    image: require('../../assests/images/img26.jpg'),
    title: 'Christmas'
  }
]
function Product() {
  return (
    <div className="block productCategories">
    <h2>Product Categories</h2>
    <Row gutter={[24, 24]}>
      {productCategories.map(productCategory => {
        return (
          <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 4 }} key={productCategory.key}>
            <div className="content">
              <div className="image">
                <img src={productCategory.image} alt="product" />
              </div>
              <h3>{productCategory.title}</h3>
            </div>
          </Col>
        );
      })}
    </Row>
  </div>
  )
}

export default Product