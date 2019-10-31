import React from 'react'
import styled from 'styled-components';

const Cell = (props) => {

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        ${({isTileMode}) => isTileMode && `margin: 5px 5px` };
        ${({isTileMode}) => isTileMode ? `padding: 15px 18px` : `padding: 40px 50px` };
        ${({inverted}) => inverted ? `background-color: #000000` : `background-color: #F0F0F0` };
    `;
    const Title = styled.div`
        width: 100%;
        font-family: "Amiri", serif;
        ${({isTileMode}) => (isTileMode ? `font-size: 28px` : `font-size: 60px`) };
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #000000` };
    `;
    const Body = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        ${({isTileMode}) => isTileMode ? `font-size: 16px` : `font-size: 20px` };
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` };
    `;

    const Links = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        ${({isTileMode}) => isTileMode ? `font-size: 12px` : `font-size: 16px` }
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #333333` }
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

    const background = {
        height: "100%",
        backgroundImage: 'url(TopBanner-illustration@2x.png)'
    };

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