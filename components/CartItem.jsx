import React ,{useContext}  from "react";
import { Button,Input} from 'antd'
import products from '../pages/products'
import {CartContext} from '../components/Cartcontext'


const CartItem=(props)=>{
    const {cartItems} = useContext(CartContext);
    const id = parseInt(props.data[0])
    const selectvalue = parseInt(props.data[1])
    // 获取添加删除函数
    const {addToCart,removeFromCart} = useContext(CartContext)
  
    return(
        <div class="flex justify-between m-2 border-2 border-grey-900 rounded-md bg-blue-200">
            <div class="flex justify-between">
                {/* 购买的商品属性 */}
                <div class="flex">
                   <div class="w-28 m-4"><img class=" rounded-md" src={products[id].image}/></div>
                   <div class="w-28 my-4">
                      <div class="font-bold text-lg">{products[id].name}</div>
                      <div class="font-bold text-lg">￥{products[id].price}</div>
                      <div>{products[id].chooseValue[selectvalue].label}</div>
                    </div>
                </div>
                {/* 添加删除商品数量按钮 */}
            <div class="flex  w-44 h-9 m-4" >
                   <div class="border-2 boder-blue-900 bg-blue-700 rounded-full ">
                        <Button class="w-8 h-8" type="primary" shape="round"
                        onClick={()=>{addToCart(id,selectvalue)}}>+</Button>
                   </div>
                   <div>
                        <Input  placeholder={`${cartItems[id][selectvalue]}`} />
                        
                   </div>
                   <div class="border-2 boder-blue-900 bg-pink-700 rounded-full">
                        <Button class="w-8 h-8" type="primary" shape="round"
                        onClick={()=>{removeFromCart(id,selectvalue)}}>-</Button>
                   </div>     
            </div>
            </div>     
        </div>
    )
}
export default CartItem