import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './footerElements';


const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Mibkers</SocialLogo>
						<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"> <FaFacebook /> </SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"> <FaInstagram /> </SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer"> <FaYoutube /> </SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Pinterest" rel="noopener noreferrer"> <FaPinterest /> </SocialIconLink>

						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;