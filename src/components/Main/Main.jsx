import React , {useState}from "react";
// import data from '../../data/data.json'
import zoom from "../../assets/img rankapp/zom.png";
import Rating from "../Rating";
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai'
import {BsStarFill} from 'react-icons/bs'
import { ContainerP, ContainerI, Title, ContainerButton,WhiteTexto,ContainerM,Texte, Form,ButtonSend,ContainerContador } from "./mainStyles";

const Main = () => {

  const [like,setLike] = useState(null)
  const [disLike,setDisLike] = useState(null)
  function voto (voto){
    if(voto && "like"){
      setLike(true);
      setDisLike(false);
      console.log("like")
      return(like)
    }
    if(voto && "dislike"){
      console.log("dislike")
      setLike(false);
        setDisLike(true);
        return(disLike)
    }

  }
  return (
    <ContainerP>
      <ContainerI>
        <div>
          <img src={zoom} alt="imagen" />
        </div>
      </ContainerI>
      <Title>
        <h2>ZOOM</h2>
      </Title>
      <ContainerButton>
        <button onClick={()=>voto("like")}><AiOutlineLike style={{color: ""}}/></button>
        <button onClick={()=>voto("dislike")} disLike={disLike}><AiOutlineDislike/></button>
      </ContainerButton>
      <WhiteTexto>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </WhiteTexto>
      <ContainerM>
        <div>
          <h2>4.5</h2>
          <p>
          <BsStarFill style={{color: "#24E0FA"}}/>
          <BsStarFill style={{color: "#24E0FA"}}/>
          <BsStarFill style={{color: "#24E0FA"}}/>
          <BsStarFill style={{color: "#24E0FA"}}/>
          <BsStarFill style={{color: "D9D9D9"}}/>
          </p>
        </div>
        <Texte>
          <h4>Let us your comment</h4>
        </Texte>
        <Form>
          <textarea name="" id=""rows="10" placeholder= "Comment"></textarea>
        </Form>
        <ButtonSend>Save</ButtonSend>
        <ContainerContador>
        <h5>What do you thing?</h5>
        <Rating />
        </ContainerContador>
      </ContainerM>
    </ContainerP>
  );
};

export default Main;


