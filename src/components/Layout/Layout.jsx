import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavItem, NavLinkItem, NavList } from './Layuot.styled';

export const Layout = () => {
  return (
    <>
      <nav>
        <NavList>
          <NavItem>
            <NavLinkItem to="/">Home</NavLinkItem>
          </NavItem>
          <NavItem>
            <NavLinkItem to="tweets">Tweets</NavLinkItem>
          </NavItem>
        </NavList>
      </nav>
      <Outlet />
    </>
  );
};
