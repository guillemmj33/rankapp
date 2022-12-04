import styled from "styled-components";

export const TrendingContainer = styled.div`
    width: 20%;
    height: 40%;
    background-color: #313131;
    margin-left: 79%;
    top: 20%;
    position: fixed;
    border-radius: 1em;
    h3{
        color: var(--title);
        padding: .5em;
        font-style: italic;
    }
    @media(max-width: 600px){
        display: none;
    }
`;