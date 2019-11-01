import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import Title from './Title';

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

    const {info, title} = props.content;
    return(
        <MainView>
            <Title heading={title.heading} subheading={title.subheading}/>
            <Grids>
            {
                info.map((grid, i) => {
                    return <Grid key={i} isTileMode={true} content={grid}/>
                })
            }
            </Grids>
        </MainView>
    )
};

export default TileBoard;