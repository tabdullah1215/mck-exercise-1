import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

import {animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';

const Header = React.forwardRef(({activeItem, setActiveItem, headerStyles, shrink}, ref) => {

    const { paddingTop, height, navPadding, picHeight, picWidth, shadowColor} = shrink ? headerStyles.shrunk : headerStyles.initial;

    const LogoContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 15%;
        margin-top: 12px;
        margin-left: 30px;
    `;
    const Image = styled(animated.img)``;
    const MainView = styled(animated.div)`
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0px 10px 5px ${shadowColor};
    `;

    return (
        <Spring
            from={{...headerStyles.initial}}
            to={{ paddingTop, height, navPadding, picHeight, picWidth }}>
            {props =>
                <MainView style={{paddingTop: props.paddingTop, height: props.height}} ref={ref}>
                    <LogoContainer>
                        <Image style={{width: props.picWidth, height: props.picHeight}} src="McK_ScriptMark_RGB_McKDeepBlue.png" alt="McKinsey & Company"/>
                    </LogoContainer>
                    <NavBar activeItem={activeItem} setActiveItem={setActiveItem} paddingTop={props.navPadding}/>
                </MainView>
            }
        </Spring>
    );
});

export default Header;