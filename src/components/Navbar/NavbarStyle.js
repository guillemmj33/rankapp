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

    @media screen and (min-width: 768px) and (max-width: 1023px) {
			width: 35%;
			height: 20%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			background-color: transparent;
			top: 135px;

			svg {
				width: 30%;
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

    @media screen and (min-width: 768px) and (max-width: 1023px) {
			display: none;
    }
`;    

export const RankingContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;

		@media screen and (min-width: 320px) and (max-width: 374px) {
			.dot-ranking {
				position: absolute;
				left: 132px;
				top: 7px; 
				height: 45px;
				width: 58px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}
	
			svg {
				color: var(--black-1);
				z-index: 1;
			}
		}

		@media screen and (min-width: 375px) and (max-width: 424px) {
			.dot-ranking {
				position: absolute;
				left: 156px;
				top: 7px; 
				height: 45px;
				width: 58px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}
	
			svg {
				color: var(--black-1);
				z-index: 1;
			}
		}

		@media screen and (min-width: 425px) and (max-width: 767px) {
			.dot-ranking {
				position: absolute;
				left: 181px;
				top: 7px; 
				height: 45px;
				width: 58px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}
	
			svg {
				color: var(--black-1);
				z-index: 1;
			}
		}

    @media screen and (min-width: 768px) and (max-width: 1023px) {
			height: 50%;
			background-color: transparent;
			
			svg {
				color: var(--white);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: -27px;
				top: -50px;
				margin-left: 32px;
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

    @media screen and (min-width: 768px) and (max-width: 1023px) {
			.dot-plus {
				position: absolute;
				left: 30px;
				top: 8px; 
				height: 35px;
				width: 37px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}

			svg {
				color: var(--black);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: 4px;
				top: 10px;  
				cursor: pointer;
			}

			h3 {
				font-size: 15px; 
			}
    }

		@media screen and (min-width: 1024px) and (max-width: 1439px) {

		}

		@media screen and (min-width: 1440px) {
			
		}
`;