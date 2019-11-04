import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavBar = ({activeItem, setActiveItem, paddingTop, navItems}) => {
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
                navItems.filter(item => item !== 'intro').map((item, i) => {
                    let activeState = activeItem === item;
                    return <NavItem
                        key={i}
                        style={{color: activeState ? '#1F40E6' : '#000000'}}
                        href={`#${item}`}
                        onClick={() => setTimeout(() => setActiveItem(item), 500)}>
                        {item[0].toUpperCase() + item.slice(1)}
                        {activeState && <Bar />}
                    </NavItem>;
                })
            }
        </MainNav>
    )
};

export default NavBar;

NavBar.propTypes = {
    activeItem: PropTypes.string.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    paddingTop: PropTypes.number.isRequired
};