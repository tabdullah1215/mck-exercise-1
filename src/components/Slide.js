import React from 'react';
import styled from 'styled-components';

const Slide = React.forwardRef(({height, color, name}, ref) => {

    const MainView = styled.div`
        height: ${height}px;
        width: 100%;
        background-color: ${color};
    `;

    return(
        <MainView ref={ref}>{name}</MainView>
    )
});

export default Slide;