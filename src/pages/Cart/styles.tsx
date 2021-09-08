import styled from "styled-components";

export const CartContainer = styled.section`
width:100%;
height:100%;
display:flex;

justify-content:center;

.cart{
  display:flex;
  position:relative;
  margin-top:100px;
  flex-direction:column;
  padding:5px;
  border-radius:6px;
  width:400px;
  height:100%;
  background:rgba(0,0,0,0.1);
  .title{
    font-size:25pt;
  }
  .price{
    margin-top:-9px;
    border-bottom:1px solid #ff0000;
    color:#333;
  }
  .total{
    color:#222;
    h2{
      color:#111;
    }
  }
  .checkout{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    width:100%;
    height:50px;
    color:white;
    background:rgba(255,0,0,0.7);
    border-radius:6px;
    cursor:pointer;
    &:hover{
      background:rgba(255,0,0,0.8);
    }

  }
  .ctitle{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    .itemName{
      font-size:20px;
    color:#111;
    padding-top:4px;
  }
   .buttons{
     display:flex;
     flex-direction:row;
     justify-content:flex-end;
     align-items:flex-end;
     align-self:flex-end;
   }
    .plus{
      display:flex;
      margin:4px 5px;
      justify-content:center;
      align-items:center;
      font-size:20px;
      border-radius:5px;
      color:white;
      width:30px;
      height:30px;
      background:rgba(255,0,0,0.8);
      cursor:pointer;
      &:hover{
         background:rgba(255,0,0,1);
      }

    }
    .minus{

      display:flex;
      margin:4px 5px;
      
      justify-content:center;
      align-items:center;
      font-size:20px;
      border-radius:5px;
      color:white;
      width:30px;
      height:30px;
      background:rgba(3,3,3,0.7);
      cursor:pointer;
      &:hover{
         background:rgba(3,3,3,0.8);
      }
    }
}

`;
export const Blank = styled.h1`
margin-top:100px;
`;