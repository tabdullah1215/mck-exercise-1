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

    const {content} = props.contentMap;
    const {info, title} = content;
    return(
        <MainView>
            <Title heading={title.heading} subheading={title.subheading} isTileMode={true}/>
            <Grids>
                {
                    info.map((grids, i) => {
                        return <Grid key={i} index={i} isTileMode={true} contentMap={grids}/>
                    })
                }
            </Grids>
        </MainView>
    )
};

export default TileBoard;