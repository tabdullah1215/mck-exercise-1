import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

import {animated} from 'react-spring';
import {Spring} from 'react-spring/renderprops';
import {device} from '../constants';
import PropTypes from 'prop-types';

const Header = React.forwardRef(({activeItem, setActiveItem, headerStyles, shrink, navItems}, ref) => {

    const { paddingTop, height, navPadding, picHeight, picWidth, shadowColor} = shrink ? headerStyles.shrunk : headerStyles.initial;

    const LogoContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 15%;
        margin-top: 12px;
        margin-left: 30px;
    `;
    const Image = styled(animated.img)`
        display: none;
        @media ${device.laptop} {
            display: block;
        }
    `;
    const MainView = styled(animated.div)`
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0px 10px 5px ${shadowColor};
    `;

    const DesktopContainer = styled.div`
        display: none;
        @media ${device.laptop} {
            display: block;
        }
    `;

    const MobileMenuIcon = styled.img`
        display: inline;
        width: 30px;
        height: 30px;
        align-self: center;
        @media ${device.laptop} {
            display: none;
        }
        &:hover {
            cursor: pointer;
        }
    `;

    const MobileContainer = styled.div`
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        font-family: "TheinhardtPan-Regular";
        font-size: 16px;
        @media ${device.laptop} {
            display: none;
        }
    `

    const MobileMenuSideContainer = styled.div`
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 10px;
    `;

    const MobileMenuCenterContainer = styled.div`
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 20px;
    `;

    return (
        <Spring
            from={{...headerStyles.initial}}
            to={{ paddingTop, height, navPadding, picHeight, picWidth }}>
            {props =>
                <>
                    <DesktopContainer>
                        <MainView style={{paddingTop: props.paddingTop, height: props.height}} ref={ref}>
                            <LogoContainer>
                                <Image style={{width: props.picWidth, height: props.picHeight}} src="McK_ScriptMark_RGB_McKDeepBlue.png" alt="McKinsey & Company"/>
                            </LogoContainer>
                            <NavBar navItems={navItems} activeItem={activeItem} setActiveItem={setActiveItem} paddingTop={props.navPadding}/>
                        </MainView>
                    </DesktopContainer>
                    <MobileContainer>
                        <MainView style={{paddingTop: props.paddingTop, height: props.height}} ref={ref}>
                            <MobileMenuSideContainer>
                                <MobileMenuIcon src="16x16.png" alt="menu"/>
                            </MobileMenuSideContainer>
                            <MobileMenuCenterContainer>
                                MDS
                            </MobileMenuCenterContainer>
                            <MobileMenuSideContainer/>
                        </MainView>
                    </MobileContainer>
                </>
            }
        </Spring>
    );
});

export default Header;

Header.propTypes = {
    activeItem: PropTypes.string.isRequired,
    setActiveItem: PropTypes.func.isRequired,
    headerStyles: PropTypes.object.isRequired,
    shrink: PropTypes.bool.isRequired
};
