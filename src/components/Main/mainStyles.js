
import styled from "styled-components";



export const ContainerP = styled.div`
background-color: #000000;
margin: 0;
padding: 0;
display: flex;
text-align: centre;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;

`
export const ContainerI = styled.div`
display:flex;
background: #313131;
width: 60%;
align-items: center;
text-align: center;
justify-content: center;
border-radius: 30px;
padding: 10px;
margin-top: 40px;
`
export const Title = styled.div`
    color: white;
    font-size: 64px;
    background-color:#313131;
    border-radius: 10px;
    margin-top: 40px;
    padding: 3px 90px;
    margin: 1rem;
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover{
      background:#313131;
    }
`

export const ContainerButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:140px;
>button{
  width: 70px;
background-color:#24E0FA;
height: 40px;
border: none;
border-radius: 10px;
background:${props=> props.like&& true ? "background-color:blue;" : null }
${props=> props.disLike&& true  ? "background-color:red;" : null }
}
`
export const WhiteTexto = styled.p`
color: white;
text-align: center;
font-size: 2rem;
padding: 10px 20px;
background-color:#313131;
width: 80%;
margin-top: 10px;
border-radius: 15px;
`
export const ContainerM = styled.div`
background: #313131;
border-radius: 10px;
padding: 10px 20px;
width: 100%;
margin-top: 20px;
>div{
  display: flex;
  justify-content: space-between;
  >h1{
    border-radius: 10px;
      background: #24E0FA;
      padding: 20px;
      color:white;
  }
  >p{
    background:#BDBDBD ;
    padding: 27px 37px;
    border-radius: 50px;
  }
}
>h5{
  font-size: 2rem;
  color: white;
}
@media (min-width:600px){
  width: auto;
  gap:50%


}
`
export const Container= styled.h2`
  background: red;
  padding: 2px 5px;
  border-radius: 10px;
`
export const Texte = styled.p`
color: white;
font-size: 2rem;
text-align:left;
`
export const Form = styled.p`
width:100%;

`
export const ContainerContador = styled.h5`
text-align: left;
color: white;
margin-top: 30px;

`
export const ButtonSend = styled.button`
background: #24E0FA;
    padding: 10px 20px;
    border-radius: 9px;
    position: absolute;
    left: 59%;
    border:none;

    @media (min-width:600px){
  width: auto;
}
    `






































