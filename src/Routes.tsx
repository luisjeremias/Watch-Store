import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

export default () =>{
  const [rawCartData,setRawCartData]:any = React.useState([]);
 
  const HandlePushcart = (cartData:any) =>{

    const exist = rawCartData.find((x:any)=> x.id === cartData.id);
    if(exist){
      setRawCartData(
        rawCartData.map((x:any)=>x.id === cartData.id ? {...exist,quantity : exist.quantity +1 } : x)
      );
    }else{
      setRawCartData([...rawCartData,{...cartData,quantity: 1}])
    }
  
  }
  const HandleRemove = (item:any) =>{
    const exist = rawCartData.find((x:any)=> x.id === item.id);
    if(exist.quantity === 1){
      setRawCartData(rawCartData.filter((x:any)=>x.id !== item.id))
    }else{
       setRawCartData(
        rawCartData.map((x:any)=>x.id === item.id ? {...exist,quantity : exist.quantity - 1 } : x)
      );
    }
  }
 
  return(
    <Switch>
      <Route exact path='/'>
      <Home Badge={rawCartData.length} HandlePushcart={HandlePushcart}/>
      </Route>
      <Route exact path='/cart'>
      <Cart HandlePushcart={HandlePushcart}HandleRemove={HandleRemove} allCartData={rawCartData}/>
      </Route>
    </Switch>
  )
}