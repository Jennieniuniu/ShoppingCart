
import React from 'react'
import CartItem from './CartItem'
import listproducts from '../pages/listproducts'

const CartItemTotal = () => {
    // 判断购物车有无商品，展示不同
    if(listproducts.length==0){
      return (<div>
          <img src="./emptycart.png"/>
      </div>
      )
    }else{
      return (
        <div>
          {listproducts.map(listproduct =>(
            <CartItem data={listproduct}/>
          ))}
        </div>
      )
    }     
}

export default CartItemTotal