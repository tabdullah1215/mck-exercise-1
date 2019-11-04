import React, { Component } from 'react';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';
import {device} from '../constants';
import PropTypes from "prop-types";

const MainView = styled.div`
    width: 100%;
    height: 100%;
    background-color: #979797;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`;

const ListContainer = styled.div`
    width: 60%;
`;

const Faq = styled.div`
    width: 100%;
    background-color: #ffffff;
`;

const Question = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    font-family: "TheinhardtPan-Medium";
    &:hover {
        cursor: pointer;
    }
    @media ${device.tablet} {
        padding: 20px 20px;
    }
`;

const Answer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 4px;
    padding: 0 20px 20px 20px;
    font-family: "TheinhardtPan-Light";
    font-size: 16px;
`;

const Image = styled.img`
    display: none;
    @media ${device.laptopL} {
        height: 1.5em;
        width: 1.5em;
        display: flex;
        self-align: left;
    }
`;

const SideMargin = styled.div`
    width: 10%;
`;

const ContentContainer = styled.div`
    width: 80%;
    `;

const AlwaysShowInMobile = styled.div`
    display: block;
    @media ${device.laptopL} {
        display: none;
    }
`;

const AlwaysShowInDesktop = styled.div`
    display: none;
    @media ${device.laptopL} {
        display: block;
    }
`;

class FaqList extends Component {
    state = {
        height: ['auto']
    };

    onClick = (i) => {
        const { height } = this.state;
        const newHeight = [...height];
        newHeight[i] = !newHeight[i] || newHeight[i] === 0 ? 'auto' : 0;
        this.setState({
            height: newHeight
        });
    };

    render() {
        const { height } = this.state;
        const { content } = this.props.contentMap;

        return (
            <MainView>
                <ListContainer>
                    {
                        content.map((faq, i) => {
                            return <Faq key={i}>
                                <Question onClick={() => this.onClick(i)}>
                                    <SideMargin>
                                        <Image src={height[i] === 'auto' ? 'c-delete.svg' : 'c-add.svg'}/>
                                    </SideMargin>
                                    <ContentContainer>
                                        {faq.question}
                                    </ContentContainer>
                                    <SideMargin/>
                                </Question>
                                <AlwaysShowInDesktop>
                                    <AnimateHeight
                                        duration={500}
                                        height={!height[i] ? 0 : height[i]}
                                    >
                                        <Answer>
                                            {faq.answer}
                                        </Answer>
                                    </AnimateHeight>
                                </AlwaysShowInDesktop>
                                <AlwaysShowInMobile>
                                    <Answer>
                                        {faq.answer}
                                    </Answer>
                                </AlwaysShowInMobile>

                            </Faq>
                        })
                    }
                </ListContainer>
            </MainView>
        );
    }
}

export default FaqList;

FaqList.propTypes = {
    contentMap: PropTypes.shape({
        content: PropTypes.arrayOf(
            PropTypes.shape({
                question: PropTypes.string.isRequired,
                answer: PropTypes.string.isRequired
            })
        )
    })
};