import styled from "styled-components";

export const TrendingContainer = styled.div`
    width: 20%;
    height: 40%;
    background-color: var(--black-2);
    margin-left: 79%;
    top: 20%;
    position: fixed;
    border-radius: 1em;

    h3 {
        color: var(--title);
        padding: .5em;
        font-style: italic;
    }

    @media screen and (max-width: 1023px){
        display: none;
    }

    @media screen and (min-width: 1024px) {
    }
`;