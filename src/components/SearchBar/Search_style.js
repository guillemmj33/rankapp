import styled from 'styled-components';

export const SearchContainer=styled.div`
/* background: var(--purple); */
width: 100%;
display: flex;
justify-content: center;
height: 11vh;
color:white;
margin-bottom:1%;
margin-top:1%;

`

export const SearchBarStyle= styled.div`
/* background: blue; */
width:50%;
overflow: scroll;
overflow-x: hidden;
font-size: small;
//para modificar el placeholder mario! :) 
::placeholder {
        padding-left: 10px;
}

::text {
        padding-left: 10px;
    }

&::-webkit-scrollbar{
    height: 1px;
    width: 8px;
}

&::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: 4px;
}

p{
    margin-left: 5%;
    line-height: 40%;
    margin-top: 1%;
}
`;

export const SearchStyle= styled.input`
background:var(--black-2);
border-radius: 15px;
border:0;
width:100%;
color:white;
padding: 7px;
position: sticky;
top:0;

&:focus{
    border:1px solid var(--blue);
    outline: none;
    background: black;
    transition: all 0.1s ease-out;
}
`;