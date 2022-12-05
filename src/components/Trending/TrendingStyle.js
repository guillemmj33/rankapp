import styled from "styled-components";

export const TrendingContainer = styled.div`
    width: 18%;
    height: 40%;
    background-color: var(--black-2);
    right: 2.5%;
    top: 60px;
    position: fixed;
    border-radius: 10px;
    overflow-y: scroll;

    h3 {
        color: var(--white);
        padding: 15px 20px 15px 20px;
        font-family: var(--font-title);
        font-style: italic;
        font-weight: 500;
        font-size: 1.2rem;
    }
    
    @media screen and (max-width: 1023px){
        display: none;
    }

    @media screen and (min-width: 1024px) {
    }
`;