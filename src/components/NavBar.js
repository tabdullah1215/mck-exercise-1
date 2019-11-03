import React from 'react';
import styled from 'styled-components';
import navItems from '../constants';

const NavBar = ({activeItem, setActiveItem, paddingTop}) => {
    const MainNav = styled.div`
        overflow: hidden;
        padding-top: ${paddingTop}px;
    `;
    const NavItem = styled.a`
        float: left;
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        color: black;
        margin-left: 10px;
        font-family: "TheinhardtPan-Light";
        &:hover {
        color: #1F40E6;
        }
    `;

    const Bar = styled.hr`
        border-color: #1F40E6;
        border-width: 2px;
        background-color: #1F40E6;
    `;

    return(
        <MainNav>
            {
                navItems.filter(item => item.name !== 'intro').map((item, i) => {
                    let activeState = activeItem === item.name;
                    return <NavItem
                        key={i}
                        style={{color: activeState ? '#1F40E6' : '#000000'}}
                        href={`#${item.name}`}
                        onClick={() => setTimeout(() => setActiveItem(item.name), 500)}>
                        {item.heading}
                        {activeState && <Bar />}
                    </NavItem>;
                })
            }
        </MainNav>
    )
};

export default NavBar;
