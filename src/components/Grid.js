import React from 'react';
import styled from "styled-components";
import Cell from './Cell';
import {device} from '../constants';
import PropTypes from "prop-types";

const Grid = (props) => {
    const getWidthString = (span) => {
        if (!span) return;
        let width = span / 12 * 100;
        return `width: ${width}%`;
    };

    const MainView = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        ${({isTileMode}) => isTileMode && `max-width: 50%;` }
        ${({isTileMode}) => isTileMode && `padding 0 2px;` }
        @media ${device.tablet} {
            ${({isTileMode}) => isTileMode && `padding 0 5px;` }
        }
    `;
    const Row = styled.div`
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        &::after {
            content: "";
            clear: both;
            display: table;
        }
    `;
    const Column = styled.div`
        float: left;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};
        ${({isTileMode}) => isTileMode && `box-sizing: border-box` };
        ${({isTileMode}) => isTileMode && `padding: 0 3px` };
        
        @media only screen and (min-width: 768px)  {
            ${({sm}) => sm && getWidthString(sm)};
        }
        
        @media only screen and (min-width: 992px)  {
            ${({md}) => md && getWidthString(md)};
        }
        @media only screen and (min-width: 1200px)  {
            ${({lg}) => lg && getWidthString(lg)};
        }
    `;

    const {content} = props.contentMap;
    return(
        <MainView isTileMode={props.isTileMode}>
            <Row isTileMode={props.isTileMode}>
                {content.map((item, i) => {
                    return <Column key={i} isTileMode={props.isTileMode} xs={props.isTileMode ? 12 : 6} sm="6" md="6" lg="6">
                        <Cell isTileMode={props.isTileMode} title={item.title} body={item.body} links={item.links}
                              inverted={(i%2 !== 0 && !props.isTileMode) || (props.index%2 !== 0 && props.isTileMode)} />
                    </Column>
                })}
            </Row>
        </MainView>
    );

};

export default Grid;

Grid.propTypes = {
    contentMap: PropTypes.shape({
        content: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                body: PropTypes.arrayOf(PropTypes.string).isRequired,
                links: PropTypes.arrayOf(PropTypes.string).isRequired
            })
        )
    })
};