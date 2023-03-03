import { Col, Row, Button, Menu, Dropdown } from 'antd';

const products = [
  {
    key: '1',
    image: require('../assests/images/img1.jpg'),
    title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
    price: '200.00 /-'
  },
  {
    key: '2',
    image: require('../assests/images/img2.jpg'),
    title: 'Colgate Triple Action Toothpaste 100ml',
    price: '150.00 /-'
  },
  {
    key: '3',
    image: require('../assests/images/img3.jpg'),
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    price: '510.00 /-'
  },
  {
    key: '4',
    image: require('../assests/images/img4.jpg'),
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
    price: '410.10 /-'
  },
  {
    key: '5',
    image: require('../assests/images/img5.jpg'),
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '202.00 /-',
    price: '315.50 /-'
  },
  {
    key: '6',
    image: require('../assests/images/img6.jpg'),
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '150.00 /-',
    price: '2000.90 /-'
  },
  {
    key: '7',
    image: require('../assests/images/img7.jpg'),
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '200.00 /-',
    price: '301.00 /-'
  },
  {
    key: '8',
    image: require('../assests/images/img8.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '213.00 /-',
    price: '250.00 /-'
  }
]

const menu = (
  <Menu
    items={[
      
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" >
            Price: Low to High
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" >
            Price: High to Low
          </a>
        ),
      },
    ]}
  />
);

function Shop() {
  return (
    <div className='block products shopPage'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>Shop</h2>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>Sort by</Button>
          </Dropdown>
        </div>
        <Row gutter={[24, 24]}>
          {products.map(product => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
                <div className="content">
                  <div className="image">
                    <img src={product.image} alt="product" />
                  </div>
                  <h3>{product.title}</h3>
                  <div className='price'>{product.price}</div>
                  <Button type="primary">Add to Basket</Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Shop;
