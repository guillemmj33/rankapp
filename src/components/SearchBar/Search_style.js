import styled from 'styled-components';

export const SearchContainer=styled.div`
width: 100%;
display: flex;
justify-content: center;
height: 7vh;
color:var(--white);
margin-top: 10px;
`
export const ListSearchBar=styled.li`
text-decoration: none;
list-style: none;
`
export const LinkStyleSearchBAr= styled.a`
color:white;
&:active,:link,:visited{
    text-decoration: none;
}

&:hover{
    color:var(--blue);
}`

export const SearchBarStyle= styled.div`
/* background: blue; */
width: 100%;

//para modificar el placeholder mario! :) 
::placeholder {
    padding-left: 15px;
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
border-radius: 20px;
border:0;
width:100%;
color:var(--white);
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