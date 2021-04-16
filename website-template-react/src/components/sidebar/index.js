import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './sidebarElements';

const Sidebar = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon/ >
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">Miniaturas</SidebarLink>
				<SidebarLink to="/">Todos os Modelos</SidebarLink>
				<SidebarLink to="/">Mais Exclusivos</SidebarLink>
				<SidebarLink to="/">Mais Modernos</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/"> Carrinho </SidebarRoute>
				<SidebarRoute to='/'> Contato </SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;