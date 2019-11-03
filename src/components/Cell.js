import React from 'react'
import styled from 'styled-components';
import {device, cellHeight} from '../constants';

const Cell = (props) => {

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        ${({isTileMode}) => isTileMode ? `justify-content: flex-start` : `justify-content: flex-start`};
        width: 100%;
        ${({isTileMode}) => isTileMode ? `height: ${cellHeight.tileMode.mobileS}px` : `height: ${cellHeight.gridMode.mobileS}px` };
        box-sizing: border-box;
        ${({isTileMode}) => isTileMode && `margin: 5px 5px` };
        ${({isTileMode}) => isTileMode ? `padding: 10px 8px` : `padding: 20px 25px` };
        ${({inverted}) => inverted ? `background-color: #000000` : `background-color: #979797` };
        @media ${device.tablet} {
            ${({isTileMode}) => isTileMode ? `height: ${cellHeight.tileMode.tablet}px` : `min-height: ${cellHeight.gridMode.tablet}px` };
            ${({isTileMode}) => isTileMode ? `padding: 15px 18px` : `padding: 30px 38px` };
        }
        @media ${device.laptop} {
            ${({isTileMode}) => isTileMode ? `height: ${cellHeight.tileMode.laptop}.px` : `min-height: ${cellHeight.gridMode.laptop}px` };
            ${({isTileMode}) => isTileMode ? `padding: 15px 18px` : `padding: 40px 50px` };
        }
        @media ${device.laptopL} {
            ${({isTileMode}) => isTileMode ? `height: ${cellHeight.tileMode.laptopL}px` : `min-height: ${cellHeight.gridMode.laptopL}px` };
            ${({isTileMode}) => isTileMode ? `padding: 15px 18px` : `padding: 40px 50px` };
        }
    `;
    const Title = styled.div`
        width: 100%;
        font-family: "Amiri", serif;
        ${({isTileMode}) => (isTileMode ? `font-size: 18px` : `font-size: 23px;`) };
        ${({isTileMode}) => (isTileMode ? `line-height: 20px` : `line-height: 27px;`) };
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #000000` };
        
        @media ${device.tablet} {
            ${({isTileMode}) => (isTileMode ? `font-size: 23px;` : `font-size: 54px;`) };
        }
        @media ${device.laptop} {     
            ${({isTileMode}) => (isTileMode ? `width: 100%;` : `width: 60%;`) };
            ${({isTileMode}) => (isTileMode ? `font-size: 25px;` : `font-size: 60px;`) };
            ${({isTileMode}) => (isTileMode ? `line-height: 27px;` : `line-height: 64px;`) };
        }
    `;
    const Body = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        ${({isTileMode}) => isTileMode ? `font-size: 12px` : `font-size: 14px` };
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` };
        @media ${device.tablet} {
            ${({isTileMode}) => (isTileMode ? `font-size: 12px;` : `font-size: 16px;`) };
        }
        @media ${device.laptop} {
            ${({isTileMode}) => (isTileMode ? `width: 100%;` : `width: 60%;`) };
            ${({isTileMode}) => (isTileMode ? `font-size: 16px;` : `font-size: 20px;`) };
        }
    `;

    const Links = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        ${({isTileMode}) => isTileMode ? `font-size: 10px` : `font-size: 12px` }
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` }
        @media ${device.tablet} {
            ${({isTileMode}) => isTileMode ? `font-size: 12px` : `font-size: 14px` }
        }
        @media ${device.laptop} {
            ${({isTileMode}) => isTileMode ? `font-size: 12px` : `font-size: 16px` }
        }
    `;

    const Paragraph = styled.p``;

    const Anchor = styled.a`
        text-decoration: none;
        color: #000000;
        margin-right: 0.5em;
        &:hover {
            color: #1F40E6;
        }
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` }
    `;

    const Image = styled.img`
        width: 1em;
        height: 1em;  
    `;

    return(
        <MainView isTileMode={props.isTileMode} inverted={props.inverted}>
            <Title isTileMode={props.isTileMode} inverted={props.inverted}>{props.title}</Title>
            <Body isTileMode={props.isTileMode} inverted={props.inverted}>
            {
                props.body.map((b, i) => {
                    return <p key={i}>{b}</p>
                })
            }
            </Body>
            <Links isTileMode={props.isTileMode} inverted={props.inverted}>
                {
                    props.links.map((lk, i) => {
                        return (
                            <Paragraph key={i}>
                                <Anchor inverted={props.inverted} href="#">{`${lk}  `}&nbsp;
                                    <Image src="RightArrow-ElectricBlue.svg"/>
                                </Anchor>
                            </Paragraph>
                        )
                    })
                }
            </Links>
        </MainView>
    )
};

export default Cell;