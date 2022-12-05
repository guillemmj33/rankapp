import styled from 'styled-components';

export const Box2 = styled.div`
        display: flex;
        height: 30vh;
        top: 65%;
        margin-left: 80%;
        position: fixed;
        width: 50%;
        a{
            width: 2em;
            font-size: 1em;
        }
        svg{
            color: #313131;
            &:hover{
        color: var(--blue);}
        }
        @media screen and (max-width: 1023px) {
            display: none;
        }
`;

export const FacebookContainer2 = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const TwitterContainer2 = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const InstagramContainer2 = styled.div`
    width: 10%;
    font-size: 2em;
`;

export const MailContainer2 = styled.div`
    width: 10%;
    font-size: 2em;
`;