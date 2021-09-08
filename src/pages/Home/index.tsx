import * as React from 'react'
import {Container,LoadMore} from './styles'
import {Header} from '../../components/Header/index'
import { Posts } from '../../components/Posts'
import {Data} from '../../assets/Data'

 interface Homeprops{
   HandlePushcart:any;
   Badge:any;
 }
const Home:React.FC<Homeprops>= ({HandlePushcart,Badge}) =>{
  const [load,setLoad] = React.useState(3);
 
  return(
    <div>
      <Header badge={Badge}/>
    <Container>
        <Posts HandlePushcart={HandlePushcart} Data={Data.slice(0,load)}/>
    
    </Container>
    {load >= Data.length ? <></> :
    <LoadMore  onClick={()=> setLoad((load)=> load + load)} className="load">
       <h2>Load More</h2>
        </LoadMore> }
        
        <div style={{width:'100%',height:30}}></div>
    </div>
  )
}

export default Home 