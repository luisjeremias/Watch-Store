import * as React from 'react'
import { Blank, CartContainer} from './styles'
import { Header } from '../../components/Header'

interface CartProps{
  allCartData: any;
  HandlePushcart:any;
  HandleRemove:any;
}
const Cart:React.FC<CartProps> = ({allCartData,HandlePushcart,HandleRemove}) =>{
  const itemsPrice = allCartData.reduce((a:any,c:any)=>a + c.price * c.quantity,0)
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;
  return(
    <div>
       <Header badge={0}/>
    <CartContainer>
     {allCartData.length === 0 &&
    <Blank>Sem Itens</Blank>
    } 
    {allCartData.length !== 0 && 
    <div className="cart">
      <h2 className="title">Cart Items</h2>
      <hr/>
      {allCartData.map((item:any)=>{
        return(
      <div>
      <div className="ctitle">
      <div>
      <h2 className="itemName">{item.name}</h2>
      </div>
      <div className="buttons">
      <div className="plus" onClick={()=>HandlePushcart(item)}>+</div>
      <div className="minus" onClick={()=>HandleRemove(item)}>-</div>
      </div>
      </div>
      <div className="price">
      {item.quantity} x {item.price.toFixed(2)}$
      </div>
      </div>
        )
      })}
    
      <div className="total">
      <h3>Items Price: {itemsPrice.toFixed(2)}$</h3>
      <h3>Tax Price (14%): {taxPrice.toFixed(2)}$</h3>
      <h2>Total Price: {totalPrice.toFixed(2)}$</h2>
      </div>
      <div className="checkout">
     Checkout
      </div>
    </div>
    }
    </CartContainer>
    </div>
  )
}

export default Cart