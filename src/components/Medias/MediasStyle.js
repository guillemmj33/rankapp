import styled from 'styled-components';

export const Box = styled.div`
        display: flex;
        height: 30vh;
        top: 20%;
        flex-direction: column;
        position: fixed;

        a {
            width: 2em;
            font-size: 50px;
        }

        svg{
            color: var(--black-2);
            &:hover{
            color: var(--blue);}
        }

        @media screen and (max-width: 1023px) {
            display: none;
        }
`;

export const FacebookContainer = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const TwitterContainer = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const InstagramContainer = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const MailContainer = styled.div`
    width: 10%;
    font-size: 2em;
`;

