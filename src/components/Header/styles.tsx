

import styled  from 'styled-components'

export const Headercontainer = styled.header`
display:flex;
position:fixed;
z-index:999;
justify-content:space-between;
width:100%;
height:60px;
background-color:#F40000;
box-shadow: 0px 1px 5px 2px #F40000;
a{
  text-decoration:none;
  

  line-height:60px;
  color:rgb(255 244 251);
  font-size:23px;
  padding-left:10px;
 
  transition:all 0.3s ease;
  &:hover{
     color:rgb(255, 220, 220);
   
  }

.cart{
 position:relative;
 padding-top:6px;
 width:50px;
 height:50px;
  margin-right:24px;
  .label{
       margin-left:25px;
       margin-top:20px;
       padding-right:10px;
       height:30px;
       width:30px;
       display:flex;
       justify-content:center;
       align-self:center;
       align-items:center;
       position:absolute;
       font-size:15px;
       border-radius:50%;
       padding-left:10px;
       color:rgb(255, 210, 202);
       &:hover{
      color:rgb(255, 255, 255);
    }
        
    }
  svg{
    line-height:60px;
    align-self:end;
    height:34px;
    width:34px;
    fill:rgb(255, 210, 240);
    &:hover{
      fill:rgb(255, 255, 255);
    }
    
  };
   
}
`
