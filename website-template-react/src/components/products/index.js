import React from 'react'
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductTitle, ProductCard, ProductImg, ProductInfo, ProductDesc, ProductPrice, ProductButton} from './productElements'

const Products = ({heading, data}) => {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductWrapper>
				{data.map((product, index)=>{
					return(
					<ProductCard key={index}>
						<ProductImg src={product.img} alt={product.alt} />
					<ProductInfo>
						<ProductTitle>{product.name}</ProductTitle>
						<ProductDesc>{product.desc}</ProductDesc>
						<ProductPrice>{product.price}</ProductPrice>
						<ProductButton>{product.button}</ProductButton>
					</ProductInfo>
					</ProductCard>
					)
				})}
			</ProductWrapper>
		</ProductsContainer>
	);
};

export default Products