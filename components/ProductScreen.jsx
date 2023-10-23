import React from 'react'
import { Row,Col,Divider} from 'antd'
import products from '../pages/products'
import Product from './Product'


function ProductScreen() {
  return (
    <div >
      <div class="flex text-blue-900">
      <Divider plain>产品展示</Divider>
      </div>
       
       {/* 商品展示映射 */}
      <Row>{products.map(product =>(
      <Col sm={24} md={12} lg={12} xl={8} >
        <Product product={product}></Product>
      </Col>
      ))}</Row>
    </div>
  )
}

export default ProductScreen
