import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 10%;
    background-color: var(--grey);
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    svg{
        width: 50%;
        height: 50%;
        font-size: 40px;
        margin: auto;
        color: white;
        cursor: pointer;
    }
    h3{
        display: none;
    }

    @media screen and (min-width: 600px){
            width: 50%;
            height: 20%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            background-color: transparent;
            top: 20%;
            svg{
                width: 30%;
                margin: 10px;
            }
            h3{
                display: flex;
                width: 50%;
                font-size: 12px;
                margin: auto;
                color: white;
            }
    }
`;

export const RedesContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    @media screen and (min-width: 600px){
            width: 40%;
            height: 50%;
            display: flex;
            flex-direction: row-reverse;
            background-color: var(--grey);
            top: 20%;
            margin-left: 0.5em;
            border-radius: 1em;
            align-items: center;
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

export const RankingContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    background-color: var(--blue);
    border-radius: 50%;
    svg{
        color: black;
    }
    @media screen and (min-width: 600px){
            width: 40%;
            height: 50%;
            display: flex;
            justify-content: center;
            flex-direction: row-reverse;
            background-color: var(--grey);
            border-radius: 1em;
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
            background-color: var(--grey);
            margin-left: 0.5em;
            border-radius: 1em;
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
