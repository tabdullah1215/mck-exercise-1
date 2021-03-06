import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Title from './Title';
import PropTypes from 'prop-types';

const TileBoard = (props) => {
    const MainView = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px 10px;
    `;
    const Grids = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
    `;

    const {content} = props.contentMap;
    const {info, title} = content;
    return(
        <MainView>
            <Title heading={title.heading} subheading={title.subheading} isTileMode={true} />
            <Grids>
                {
                    info.map((cells, i) => {
                        return <Grid key={i} index={i} isTileMode={true} contentMap={cells}/>
                    })
                }
            </Grids>
        </MainView>
    )
};

export default TileBoard;

TileBoard.propTypes = {
    contentMap: PropTypes.shape({
        content: PropTypes.shape({
            title: PropTypes.shape({
                heading: PropTypes.string.isRequired,
                subheading: PropTypes.string.isRequired
            }),
            info: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any.isRequired))
        })
    })
};