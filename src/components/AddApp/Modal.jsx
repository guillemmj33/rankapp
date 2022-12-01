import React from 'react';
import { ModalContainer, TitleModal, TextModal, BtnModal, BtnContainer } from './ModalStyle';

const Modal = ({state, changeState}) => {
    return (
        <>
            {state &&
                <ModalContainer>
                    <TitleModal>!Muchas gracias por tu feedback!</TitleModal>
                    <p>Gracias a vosotr@s nuestra comunidad va creciondo mas y mas.</p>
                    <TextModal>Nuestro equipo de verificadores revisará tu petición en un plazo maximo de 15 dias para poder incluir tu propuesta en nuestra base de datos. Por cualquier duda <b style={{color: "orange"}}>Contacta con Nosotros.</b>
                    </TextModal>
                    <BtnContainer>
                    <BtnModal onClick={() => changeState(false)}>
                        OK
                    </BtnModal>
                    </BtnContainer>
                    
                </ModalContainer>
            }
        </>
    )
}

export default Modal