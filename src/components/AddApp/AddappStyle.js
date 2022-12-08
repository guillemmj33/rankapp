import styled from 'styled-components';

export const AppContainer = styled.div`
    max-width: 55vw;
    height: 28rem;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    padding: 2em;
    margin: auto;
    margin-top: 6.5rem;
    border-radius: 1em;
    
    p{
        font-size: 24px;
        margin-bottom: 2rem;
    }

    @media (max-width: 800px){
        p{
            font-size: 20px;
            margin-bottom: 1rem;
        } 
    }
    @media (max-width: 600px){
        max-width: 80%;
        height: 30em;
        margin-top: 6rem;
        padding: 1em;
        justify-content: center;
        
    }
`;

export const AppInput = styled.input`
    margin-bottom: 1em;
`;

export const SubmitApp = styled.button`
    border: none;
    border-radius: 2em;
    margin-top: 1em;
    background-color: var(--blue);
    padding: 0.5em;
`;

