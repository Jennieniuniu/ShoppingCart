import React,{useState,useContext } from 'react'
import { Input,Badge,Button, Modal } from 'antd'
import CartItemTotal from './CartItemTotal'
import {CartContext} from '../components/Cartcontext'
import products from '../pages/products'
import listproducts from '../pages/listproducts'


const Header = () => {
  const { Search } = Input
  const onSearch = (value) => console.log(value) 
  const {clearCart,cartItems} = useContext(CartContext);
  
  // 点击控制购物车展示框显示
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
   
  // 计算购物车总价
  const totalprice =()=>{
    let money =0
    listproducts.map((listproduct)=>{
      money = money+ parseInt(cartItems[listproduct[0]][listproduct[1]])*parseFloat(products[listproduct[0]].price)
    })
    money = money.toFixed(1)
    return money
  }

  return (
    <>
    <div class="flex justify-between rounded-lg border-b-4 border-blue-200 bg-blue-400">
      <img class="w-64 h-32  " src="https://n.sinaimg.cn/default/656/w376h280/20211016/27f3-d4b48d6fc3e6ad92075accf6edfa3381.jpg" alt="携程商城" />
      <div  class="flex justify-between">
        {/* 搜索框 */}
        <div class="w-22 h-10 m-10" ><Search class="h-8 p-1 rounded-md border-4 border-blue-100 " placeholder="搜索商品..." onSearch={onSearch} />
        </div>
        {/* 购物车 */}
        <div class="flex m-8">
        <Badge count={listproducts.length}>

          <img class="w-8 h-8 cursor-pointer" src="./chart_icon.png" alt="携程商城" onClick={showModal}/>
          <Modal title="购物车" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  
          footer={[
            
            <div class="font-bold">总价：￥{totalprice()}</div>,
            <div>
                 <Button key="back" onClick={()=>{clearCart()}}>清空购物车</Button>
                 <Button key="back" onClick={handleOk}>结算</Button>
            </div>,]}>
            <CartItemTotal/>
          </Modal>
        </Badge>
        </div>
      </div>
    </div>
    </> 
  )}
  
export default Header

