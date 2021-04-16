import React from 'react';
import {FeatureContainer, FeatureButton} from './featureElements';

const Feature = () => {
	return (
		<FeatureContainer>
			<h1>Miniaturas em destaque</h1>
			<p>Confira as miniaturas em destaque</p>
			<FeatureButton>Conferir</FeatureButton>
		</FeatureContainer>
	);
};

export default Feature;