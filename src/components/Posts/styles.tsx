import styled from 'styled-components'


interface Props{
  source:string
};

export const PostsContainer = styled.section`

padding-top:80px;
 display:grid;
 grid-template-columns: repeat(3,1fr);


`;

export const PostContainer  = styled.section<Props>`

width:26vw;
height:40vw;
background:white;
border-radius:6px;
box-shadow: 0px 0px 7px 2px #b9b8b8;
display:flex;
justify-content:center;
margin:10px;

.Post{
  display:flex;
  flex-direction:column;
  width:100%;
  height:100px;
  
  .imgContainer{
   align-self:center;
  background-position: 100% 100%;
  border-radius:6px;
  width: 26vw;
  height:24vw;
  
  cursor: zoom-in;
  
 
  &:hover{
     background-image:url(${(props) => props.source});
  }
  }
   img {
    border-radius:6px;
    align-self:center;
    transition: color .1s;
    padding:10px;
    width:100%;
    height:100%;
    opacity:1;
    &:hover {
    opacity: 0;
   
  }
  }
  h2{
    font-size:2.4vw;
    color:#292928;
    margin-left:5px;
  }
  h3{
    font-size:2vw;
    color:#9240ff;
    margin-left:5px;
  }
  button{
    margin-top:2px;
     align-self:center;
     background:transparent;
     border:0;
     cursor:pointer;
      &:hover{
        opacity:0.7;
      }
  }
  svg{
      width:7vw;
      height:7vw;
       stroke:#F40000;
      stroke-linecap="round"
      stroke-linejoin="round"
     
  }
}

`;