import React from 'react'
import Card from '../components/home/card';
import RecentProduct from '../components/home/recentProduct'
import Information from '../components/home/information';
import Product from '../components/home/product';
import Sale from '../components/home/sale';
import TopBrands from '../components/home/topBrands';
function Home() {
  return (
    <div style={{marginTop:15,marginLeft:10}}>
        <Card/>
        <RecentProduct/>
        <Information/>
        <Product/>
        <Sale/>
        <TopBrands/>
    </div>
  )
}

export default Home;