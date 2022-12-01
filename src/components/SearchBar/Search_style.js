import styled from 'styled-components';

export const SearchBarStyle= styled.div`
    width: 100%;
    margin: 5px 0 15px 0;
`;

export const SearchStyle= styled.input`
    background:var(--black-2);
    font-family: var(--font-text);
    font-size: 1rem;
    border-radius: 50px;
    border: none;
    margin-top: 7px;
    width: 100%;
    color: var(--white);
    padding: 5px;

    //para modificar el placeholder mario! :) 
    ::placeholder {
        padding-left: 10px;
    }

    ::text {
        padding-left: 10px;
    }

    &:focus{
        border: 1px solid var(--blue);
        outline: none;
        background: var(--black-1);
        transition: all 0.1s ease-out;


    }

`;