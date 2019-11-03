import React, {memo} from 'react';
import styled from 'styled-components';
import Title from './Title';
import {device} from '../constants';


const ImageView = memo((props) => {
    const MainView = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
        color: #ffffff;
    `;
    const ImageContainer = styled.div`
        height: 95%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        background-image: linear-gradient(to right, #051C2C, darkblue);
    `;
    const ImageDesktop = styled.img`
            display: none;
        @media ${device.laptopL} {
            display: inline;
            max-height: 45%;
            margin-top: 30px;
        }
    `;
    const ImageMobile = styled.img`
            display: inline;
            max-width: 45%;
            margin-top: 30px;
        @media ${device.laptopL} {
            display: none;
        }
    `;

    const {content} = props.contentMap;
    const {info, title} = content;
    return (
        <MainView>
            <ImageContainer>
                <Title heading={title.heading} subheading={title.subheading} inverted={true}/>
                <ImageDesktop src={info.desktop}/>
                <ImageMobile src={info.mobile} />
            </ImageContainer>
        </MainView>
    );
}, () => true);

export default ImageView;