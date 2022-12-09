import React, {useState } from 'react';
import { AppContainer, AppInput, SubmitApp} from './AddappStyle';
import Modal from './Modal';


const Addapp = () => {
    const [stateModal, openModal] = useState(false);
return (
    <>
        <Modal
            state = {stateModal}
            changeState = {openModal}>
        </Modal>
        <AppContainer>
            <p style={{color:"#24E0FA"}}>¿Crees que falta algo?</p>
            <p style={{color:"white"}}>Dinos qué aplicación te gustaría incluir en RankApp rellenando este pequeño formulario.</p>
                <label style={{color:"white"}}>Nombre de la app:</label>
                <AppInput type= "text"></AppInput>
                <label style={{color:"white"}}>URL para la documentacion:</label>
                <AppInput type= "url"></AppInput>
                <SubmitApp onClick= {() => openModal(!stateModal)}type="button">Enviar formulario</SubmitApp>
        </AppContainer>
    </>
)
}

export default Addapp;



