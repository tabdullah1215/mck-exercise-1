import React from 'react'
import styled from 'styled-components';

const Hero = (props) => {

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin-left: 100px;
        margin-top: 20px;
    `;
    const Title = styled.div`
        width: 50%;
        font-family: "Amiri", serif;
        font-size: 60px;
        color: #000000;
    `;
    const Body = styled.div`
        width: 50%;
        font-family: "TheinhardtPan-Light";
        font-size: 20px;
        color: #333333;
    `;

    const background = {
        height: "100%",
        backgroundImage: 'url(TopBanner-illustration@2x.png)'
    };

    console.log(props);

    return(
        <MainView>
            <Title>{props.title}</Title>
            <Body>
                {
                    props.body.map((b, i) => {
                        return <p key={i}>{b}</p>
                    })
                }
            </Body>
        </MainView>
    )
};

export default Hero;