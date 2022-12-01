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
			width: 35%;
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
				display: none;
			}
		}
`;

export const MediaContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
		
    div {
			width: 100%;
			display: flex;
    }

    @media screen and (min-width: 768px){
			display: none;
    }
`;    

export const RankingContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    background-color: var(--blue);
    border-radius: 100%;

    svg {
			color: black;
    }

    @media screen and (min-width: 768px){
			width: 50%;
			height: 50%;
			display: flex;
			background-color: transparent;
			justify-content: center;
			flex-direction: row-reverse;
			border-radius: 50px;
			margin: 0.5em 0.5em;
			align-items: center;
			
			svg {
				color: var(--white);
				width: 40%;
        margin: auto;
			}

			h3 {
				display: none;
			}
    }
`;

export const PlusContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;

    @media screen and (min-width: 768px){
			width: 50%;
			height: 45%;
			display: flex;
			flex-direction: row-reverse;
			margin-left: 0.5em;
			border-radius: 50px;
			svg {
				background-color: var(--blue);
				width: 30%;
				height: 70%;
				border-radius: 5em;
				color: black;   
			}

			h3 {
				font-size: 15px; 
			}
    }
`;
