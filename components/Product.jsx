import React, { useContext } from 'react'
import { Image,Card,Select, Button} from "antd";
import {CartContext} from './Cartcontext'


function Product({product}) {
  // 加入购物车
  const {addToCart} = useContext(CartContext)
  // 选择商品类型
  const handleChange = (value) => {
    product.defaultValue=value
    return product.defaultValue
  };

  return (
      <div class=" m-6 border-8 border-grey-900 rounded-md">
      <Card>
        {/* 商品属性展示 */}
        <div class="p-2">
          <a href={`/products/${product.id}`}>
            <Image src={product.image} />
            <p class="text-2xl font-bold">{product.name}</p>
            <div class="text-lg h-20 overflow-auto"><p >{product.description}</p></div>
            <p class=" text-2xl font-bold">￥{product.price}</p>
          </a>
          
        </div>
        {/* 选择商品类型 */}
        <div class="flex w-10 px-2 py-2">
          <Select
                    defaultValue={product.defaultValue}
                    style={{ width: "15rem" }}
                    onChange={handleChange}
                    options={product.chooseValue}
           />
        </div>
        {/* 加入购物车按钮 */}
        <div class="bg-blue-500 my-4 mx-2 rounded-md">
        <Button  type="primary" 
          block onClick={()=>{addToCart(product.id,product.defaultValue)}}>
          +加入购物车</Button>
        </div>

      </Card>
      </div>
       
     
    
    
  )
}

export default Product
