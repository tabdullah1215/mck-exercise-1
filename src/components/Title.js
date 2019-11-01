import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        `;
    const Heading = styled.div`
        width: auto;
        height: auto;
        font-size: 40px;
        line-height: 45px;
        font-family: "Amiri", serif;
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #000000` }
        text-align: center;
    `;
    const Subheading = styled.p`
        width: 60%;
        height: auto;
        font-size: 18;
        text-align: center;
        color: #000000
        margin: 0 0 10px 0;
        ${({inverted}) => inverted ? `color: #ffffff` : `color: #000000` }
    `;

    return (
        <MainView>
            <Heading inverted={props.inverted}>{props.heading}</Heading>
            <Subheading inverted={props.inverted}>{props.subheading}</Subheading>
        </MainView>
    );
};

export default Title;