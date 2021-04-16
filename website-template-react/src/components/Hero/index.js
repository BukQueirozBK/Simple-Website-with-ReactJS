import React, {useState} from 'react';
import Navbar from '../navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './heroElements';
import Sidebar from '../sidebar'

const Hero = () => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
	setIsOpen(!isOpen)
};

	return (
		<HeroContainer>
			<Navbar toggle={toggle}/>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroContent>
				<HeroItems> 
					<HeroH1>Mibkers Miniaturas personalizadas para você</HeroH1>
					<HeroP>Tipos variados, clássicos e novos</HeroP>
					<HeroBtn>Começar</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;