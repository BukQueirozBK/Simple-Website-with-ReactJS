import styled from 'styled-components';
import ImgBg from '../../images/motorcicle1.jpg';

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${ImgBg});
	height: 100vh;
	background-position: center;
	background-size: cover;
`;

export const HeroContent = styled.div`
	height: calc(100vh -80px);
	max-height: 100%;
	padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	line-height: 1;

@media screen and (max-width: 650px){
	width: 100%;
}
`;

export const HeroH1 = styled.h1`
	font-size: clamp(2.2rem, 8vw, 4rem);
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	box-shadow: 3px 5px #7894E5;
	letter-spacing: 2px;
	font-weight: 600;
`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 400;
`


export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	margin-bottom: 52px;
	border: 2px solid #fff;
	border-radius: 5px;
	background: rgba(0,0,0,0.1);
	-webkit-backdrop-filter: saturate(180%) blur(20px);
   	backdrop-filter: saturate(180%) blur(20px);
	color: #fff;
	transition: 0.2s ease-out;


&:hover{
	background: #fff;
	transition: 0.2s ease-out;
	cursor: pointer;
	color: #000;
}
`;	
