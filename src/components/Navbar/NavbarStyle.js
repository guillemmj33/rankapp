import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: var(--black-2);
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;

    svg {
        width: 30%;
        height: 30px;
        font-size: 40px;
        margin: auto;
        color: var(--blue);
        cursor: pointer;
    }

    h3 {
        display: none;
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: transparent;
        top: 135px;

        svg {
            width: 30%;
            margin: 10px;
        }

        h3 {
            display: flex;
            width: 70%;
            font-size: 1.2rem;
            margin: auto;
            color: var(--blue);
        }
    }
`;

export const RedesContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    top: 20%;
    border-radius: 50px;
    align-items: center;
    
    svg {
        width: 25%;
    }

    @media screen and (min-width: 768px) {
        width: 30%;
        svg {
            width: 25%;
            margin: auto;
        }
        h3 {
            font-size: 1.2rem;
        }
    }
`;    

export const RankingContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    background-color: var(--blue);
    border-radius: 100%;
    svg{
        color: black;
    }
    @media screen and (min-width: 600px){
            width: 40%;
            height: 50%;
            display: flex;
            justify-content: center;
            flex-direction: row-reverse;
            border-radius: 50px;
            margin: 0.5em 0.5em;
            align-items: center;
            svg{
                color: white;
            }
    }
    @media screen and (min-width: 700px) {
        width: 50%;
        svg{
            width: 40%;
            margin: auto;
        }
        h3{
            font-size: 20px;
        }
    }
`;

export const PlusContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    @media screen and (min-width: 600px){
            width: 40%;
            height: 45%;
            display: flex;
            flex-direction: row-reverse;
            margin-left: 0.5em;
            border-radius: 50px;
            svg{
                background-color: var(--blue);
                width: 40%;
                height: 70%;
                border-radius: 5em;
                color: black;   
            }
            h3{
            font-size: 10px; 
        }
    }
    @media screen and (min-width: 700px) {
        width: 50%;
        svg{
            width: 30%;
        }
        h3{
            font-size: 20px; 
        }
    }
`;
