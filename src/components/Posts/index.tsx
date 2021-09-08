 import * as React from 'react'
 import {PostsContainer,PostContainer } from './styles';
 


 interface Postprops{
   Data:any;
   HandlePushcart:any;
 }

const Posts: React.FC<Postprops> = ({Data,HandlePushcart})=>{

  const [xImage,setXImage] = React.useState(0)
  const [yImage,setYImage] = React.useState(0)
  const [rawCartData,setRawCartData] = React.useState([])
  
  function Zoom(e:any){
  let offsetX;
  let offsetY;
  let x;
  let y;
  let zoomer = e.currentTarget;
  offsetX = e.nativeEvent.offsetX 
  offsetY = e.nativeEvent.offsetY
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  setXImage(x)
  setYImage(y)
  
  
  }
  
return(
<PostsContainer >
  {Data.map((i:any)=>{
    return(
   <PostContainer className="postContainer" source={i.image}>
  <div className="Post" >
    <div className="imgContainer"  onMouseMove={(e)=> Zoom(e)}  style={{backgroundPosition:xImage + '%' +yImage + '%'}}>
    <img draggable={false} sizes="contain" alt="watch picture"  src={i.image}/>
    </div>
  <h2>{i.watchName}</h2>
  <h3>{i.price}$</h3>
  <button onClick={()=>HandlePushcart({'quantity':1,'id':i.id,'price':i.price,'name':i.watchName})}><svg  viewBox="0 0 24 24" fill="none" ><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></button>
  </div>
</PostContainer>
    )
  })}



 </PostsContainer>
)
 }

export { Posts }