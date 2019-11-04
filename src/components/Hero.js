import React from 'react'
import styled from 'styled-components';
import {device} from '../constants';
import PropTypes from 'prop-types';

const ContentView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 60%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 35px;
        padding-top: 0;
        @media ${device.tablet} {
            padding-left: 70px;
            padding-top: 0;
        }
        @media ${device.laptop} {
            padding-left: 100px;
            padding-top: 40px;
        }
    `;
const MediaView = styled.div`
    width: 40%;
    padding: 20px 20px 30px 20px;
`;

const MainView = styled.div`
    display: flex;
    flex-direction: row;
`;
const Title = styled.div`
        width: 100%;
        font-family: "Amiri", serif;
        font-size: 40px;
        line-height: 45px;
        color: #000000;
        @media ${device.tablet} {
            font-size: 54px;
            line-height: 60px;
        }
        @media ${device.laptop} {
            width: 100%;
            font-size: 60px;
            line-height: 66px;
        }
    `;
const Body = styled.div`
        width: 100%;
        font-family: "TheinhardtPan-Light";
        font-size: 12px;
        font-size: 14px;
        color: #333333;
        @media ${device.tablet} {
            font-size: 14px;
            line-height: 16px;
        }
        @media ${device.laptop} {
            width: 100%;
            font-size: 20px;
            line-height: 22px;
        } `;

const Paragraph = styled.p`
        padding-right: 50px;
    `;

const Image = styled.img`
        width: 90%;
        height: 90%;
    `;

class Hero extends React.Component {

    render() {
        const {title, body, media} = this.props.contentMap.content;
        return (
            <MainView>
                <ContentView>
                    <Title>{title}</Title>
                    <Body>
                    {
                        body.map((b, i) => {
                            return (
                                <Paragraph key={i}>{b}</Paragraph>
                            )
                        })
                    }
                    </Body>
                </ContentView>
                <MediaView>
                    <Image
                        src={media}
                        alt="top banner"
                    />
                </MediaView>
            </MainView>
        )
    }
}

export default Hero;

Hero.propTypes = {
    contentMap: PropTypes.shape({
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.arrayOf(PropTypes.string).isRequired,
            media: PropTypes.string.isRequired
        })
    })
};