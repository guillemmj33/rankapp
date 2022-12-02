import styled from 'styled-components';

export const LogoContainer = styled.div`
    width: 50%;
    height: 50%;
    color: var(--title);
    display: flex;
    
    margin: 1.5em;
    margin-top: 2em;
    h1{
        color: var(--title);
        position: absolute;
        font-family: 'Acme', sans-serif;
    }
    div{
        background-color: var(--blue);
        width: 3em;
        height: 3em;
        border-radius: 50%;
        z-index: -1;
        position: fixed;
        margin-left: 8rem;
        margin-top: -1rem;
    }
    @media screen and (max-width: 600px) {
        display: none;
        
    }
`;

export const LetraLogo = styled.h1`
    font-family: 'Acme', sans-serif;
    width: 50%;
    color: white;
    z-index: 1;
    margin-top: 0.3em;
`;

export const CirculoLogo = styled.div`
    width: 2em;
    height: 2em;
    background-color: var(--purple);
    border-radius: 50%;
    
`;
