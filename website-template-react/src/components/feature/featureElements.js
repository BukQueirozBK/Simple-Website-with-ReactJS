import styled from 'styled-components';
import FeaturePic from '../../images/image8.jpg';

export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${FeaturePic});
	height: 100vh;
	max-height: 500px;
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	padding: 0 1rem;

	h1{
		font-size: clamp(3rem, 5vw, 5rem);
	};

	p{
		margin-bottom: 1rem;
		font-size: clamp(1rem, 3vw, 2rem);
	}
`;

export const FeatureButton = styled.button`
	font-size: 1.4rem;
	padding: 0.6rem 3rem;
	border: 2px solid #fff;
	border-radius: 5px;
	background: rgba(0,0,0,0.1);
	-webkit-backdrop-filter: saturate(180%) blur(20px);
   	backdrop-filter: saturate(180%) blur(20px);
	color: #fff;
	transition: 0.2s ease-out;

	&:hover{
		color: #111;
		background: #fff;
		cursor: pointer;
		transition: 0.2s ease-out;
	}
`;