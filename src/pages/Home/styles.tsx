import styled from 'styled-components'

const Container = styled.main`
width:100%;
height:100%;
 display:flex;
justify-content:center;

`;
const LoadMore = styled.div`
margin: 0 auto;
display:flex;
align-items:center;
justify-content:center;
width:130px;
height:50px;
border:2px solid #ff0000;
border-radius:5px;
cursor:pointer;
&:hover{
  background-color:rgba(255,0,0,0.1)
}
h2{
  color:#222;
  font-size:15pt;
}

`;
export {Container,LoadMore}