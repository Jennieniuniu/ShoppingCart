import React from 'react'
import { createContext,useState } from 'react'
import products from '../pages/products'
import listproducts from '../pages/listproducts'


export const CartContext = createContext(null)

// 每个商品购买数量初始化归零
const getDefaultCart=()=>{
  let cartarr= new Array(products.length)
  for(let i=0;i<products.length;i++){
    cartarr[i]=new Array(products[i].chooseValue.length)
    for(let j=0;j<products[i].chooseValue.length;j++){
      cartarr[i][j]=0
    }
  }
  return cartarr
}


export const CartContextProvider = (props) => {
  // 记录购买商品数量
  const [cartItems,setCartItems] = useState(getDefaultCart())

  // 添加商品
  const addToCart = (itemId,itemValue) =>{  
    setCartItems((prev) => ({...prev,[itemId]:{...prev[itemId],[itemValue]:prev[itemId][itemValue]+1}}))
    // 判断添加商品是否存在列表单中，若不存在添加到列表单，若已存在不添加，更新列表单数量
    let push_state=0
    listproducts.map((product)=>{
      if((product[0]==itemId)&&(product[1]==itemValue)){}
      else{
        push_state++;
      }
    })
      if(push_state==listproducts.length){
        let push_item=new Array(); 
      push_item=[itemId,itemValue]
      listproducts.push(push_item) 
      }
  }

  // 删除商品
  const removeFromCart = (itemId,itemValue) =>{
    setCartItems((prev) => ({...prev,[itemId]:{...prev[itemId],[itemValue]:prev[itemId][itemValue]-1}}))
    // 遍历列表单中商品，若购买数量为0则从列表单中删除
    let map_index=0
    listproducts.map((listproduct)=>{
      if((cartItems[listproduct[0]][listproduct[1]]==1)&&(listproduct[0]==itemId)&&(listproduct[1]==itemValue)){
        listproducts.splice(map_index,1)
      }else{}
      map_index++
    })
  }

  // 一键清空购物车
  const clearCart=()=>{
    setCartItems((prev) => ({...prev=getDefaultCart()}))
    listproducts.length=0
   
  }
 
  const contextValue={cartItems,addToCart,removeFromCart,clearCart}
  return (
    <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
  )
}

