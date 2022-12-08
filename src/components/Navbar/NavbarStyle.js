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

		@media screen and (max-width: 767px) {
			h3 {
				display: none;
			}
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

		@media screen and (min-width: 1024px) {
			background-color: transparent;
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

		@media screen and (min-width: 1024px) and (max-width: 1439px) {
			width: 50%;
			height: 100%;
			display: flex;
			
			div {
				width: 100%;
				display: flex;
			}

			svg {
				color: var(--white);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: -99px;
				top: -680px;
				margin-left: 32px;
			}

			h3 {
				display: none;
			}
		}

		@media screen and (min-width: 1440px) {
			width: 50%;
			height: 100%;
			display: flex;
			
			div {
				width: 100%;
				display: flex;
			}

			svg {
				color: var(--white);
				width: 33%;
				position: absolute;
				left: -150px;
				top: -790px;
			}

			h3 {
				font-family: var(--font-text);
				position: absolute;
				top: -878px;
				left: 120px;
				font-weight: 700;
				color: var(--white);
				font-size: 1.4rem;
				font-style: italic;
			}
		}
`;    

export const RankingContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;

		@media screen and (min-width: 320px) and (max-width: 374px) {
			.dot-ranking {
				position: absolute;
				left: 130px;
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
				position: absolute;
				left: 110px;
				top: 15px;
			}
		}

		@media screen and (min-width: 375px) and (max-width: 424px) {
			.dot-ranking {
				position: absolute;
				left: 155px;
				top: 6px; 
				height: 47px;
				width: 60px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}
	
			svg {
				color: var(--black-1);
				z-index: 1;
				position: absolute;
				left: 128px;
				top: 15px;
			}
		}

		@media screen and (min-width: 425px) and (max-width: 767px) {
			.dot-ranking {
				position: absolute;
				left: 178px;
				top: 6px; 
				height: 48px;
				width: 63px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}
	
			svg {
				color: var(--black-1);
				z-index: 1;
				position: absolute;
				left: 146px;
				top: 15px;
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

		@media screen and (min-width: 1024px) and (max-width: 1439px) {
			height: 50%;
			background-color: transparent;
			
			svg {
				color: var(--white);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: -65px;
				top: -750px;
			}

			h3 {
				display: none;
			}
		}

		@media screen and (min-width: 1440px) {
			height: 50%;
			background-color: transparent;
			
			svg {
				color: var(--white);
				width: 33%;
				position: absolute;
				left: -150px;
				top: -880px;
			}

			h3 {
				font-family: var(--font-text);
				position: absolute;
				top: -790px;
				left: 120px;
				font-weight: 700;
				color: var(--white);
				font-size: 1.4rem;
				font-style: italic;
			}
		}
`;

export const PlusContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;

		@media screen and (min-width: 320px) and (max-width: 374px) {
			svg {
				color: var(--blue);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: 210px;
				top: 15px;  
				cursor: pointer;
			}
		}

		@media screen and (min-width: 375px) and (max-width: 424px) {
			svg {
				color: var(--blue);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: 240px;
				top: 15px;  
				cursor: pointer;
			}
		}

		@media screen and (min-width: 425px) and (max-width: 767px) {
			svg {
				color: var(--blue);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: 270px;
				top: 15px;  
				cursor: pointer;
			}
		}

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
				color: var(--black-2);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: 4px;
				top: 10px;  
				cursor: pointer;
			}

			h3 {
				display: none;
			}
    }

		@media screen and (min-width: 1024px) and (max-width: 1439px) {
			.dot-plus {
				position: absolute;
				left: 83px;
				top: -610px; 
				height: 35px;
				width: 37px;
				background-color: var(--blue);
				border-radius: 50%;
				display: inline-block;
			}

			svg {
				color: var(--black-2);
				padding: 2px;
				width: 33%;
				position: absolute;
				left: -67px;
				top: -608px;  
				cursor: pointer;
			}

			h3 {
				display: none;
			}
		}

		@media screen and (min-width: 1440px) {
			.dot-plus {
				position: absolute;
				left: 70px;
				top: -700px; 
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
				left: -149px;
				top: -698px;  
				cursor: pointer;
			}

			h3 {
				font-family: var(--font-text);
				position: absolute;
				top: -700px;
				left: 120px;
				font-weight: 700;
				color: var(--white);
				font-size: 1.4rem;
				font-style: italic;
			}
		}
`;
