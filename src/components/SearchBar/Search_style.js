import styled from 'styled-components'

export const SearchBarStyle= styled.div`
/* background: var(--purple); */
width: 100%;
display: flex;
justify-content: center;
background-color: transparent;
position: absolute;
color:white;
z-index: 1;
`;

export const SearchStyle= styled.input`
background:var(--black-2);
border-radius: 9px;
border:0;
margin-top: 1%;
width:500px;
color:white;
padding: 7px;

&:focus{
    border:1.5px solid var(--blue);
    outline: none;
    background: black;
    transition: all 0.1s ease-out;
}

@media screen and (max-width: 1000px){
    width: 400px;
}

@media screen and (max-width: 900px){
    width: 300px;
}

@media screen and (max-width: 730px){
    width: 200px;
}

`;