import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './navbarelements';

const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavLink to='/'>Mibkers</NavLink>
				<NavIcon onClick={toggle}>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
};

export default Navbar;