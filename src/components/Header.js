import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Header = React.forwardRef(({activeItem, setActiveItem}, ref) => {
    const Title = styled.img`
        width: 140px;
        height: 44px;
        margin-top: 10px;
        margin-left: 20px;
        margin-right: 40px;
    `;
    const MainView = styled.div`
        display: flex;
        flex-direction: row;
        padding-top: 1em;
        margin-bottom: 20px;
        height: 91px;
        width: 100%;
        background-color: transparent;
        box-shadow: 0px 10px 5px lightgrey;
    `;

    return (
        <MainView ref={ref} >
            <Title src="McK_ScriptMark_RGB_McKDeepBlue.png" alt="McKinsey & Company"/>
            <NavBar activeItem={activeItem} setActiveItem={setActiveItem}/>
        </MainView>
    )
});

export default Header;