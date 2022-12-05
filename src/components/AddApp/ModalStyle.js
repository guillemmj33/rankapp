import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 90vw;
    height: 30rem;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2em;
    margin-left: 1.5em;
    border-radius: 1em;
    position: fixed;
    
    p{
        color: var(--title);
    }
    @media (min-width: 600px){
        max-width: 60vw;
        margin-left: 7.5em;
        margin-top: 5rem;
    }

    @media (min-width: 700px){
        margin-top: 5rem;
        margin-left: 9em;
    }

    @media (min-width: 800px){
        max-width: 55vw;
        margin-top: 5rem;
        margin-left: 11.5em;
        height: 30em;
    }
    @media (min-width: 900px){
        max-width: 55vw;
        margin-left: 13.4em;
    }
    @media (min-width: 1000px){
        max-width: 55vw;
        margin-left: 20.3em;
    }
`;

export const TitleModal = styled.h1`
    color: var(--blue);
    font-size: 35px;
`;

export const TextModal = styled.p`
    color: var(--title);
    font-size: 20px;
`;

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const BtnModal = styled.button`
    width: 5em;
    border: none;
    border-radius: 2em;
    margin-top: 1em;
    background-color: var(--blue);
    padding: 0.5em;
    
`;