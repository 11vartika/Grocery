import React from 'react'
import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assests/images/img5.jpg'),
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '200.00 /-',
    price: '450.00 /-'
  },
  {
    key: '2',
    image: require('../../assests/images/img6.jpg'),
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '157.50 /-',
    price: '210.90 /-'
  },
  {
    key: '3',
    image: require('../../assests/images/img7.jpg'),
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '220.00 /-',
    price: '510.50 /-'
  },
  {
    key: '4',
    image: require('../../assests/images/img8.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '300.00/-',
    price: '220.50 /-'
  }
]
function Sale() {
  return (
    <div className="block products separator">
    <h2>Sale Products</h2>
    <Row gutter={[24, 24]}>
      {products.map(product => {
        return (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
            <div className="content">
              <div className="image">
                <img src={product.image} alt="product" />
              </div>
              <h3>{product.title}</h3>
              <div className='price'>
                <span className='salePrice'>{product.saleprice}</span> 
                {product.price}
              </div>
              <Button type="primary">Add to Basket</Button>
            </div>
          </Col>
        );
      })}
    </Row>
  </div>
);
}
  

export default Sale