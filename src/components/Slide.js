import React from 'react';
import styled from 'styled-components';

const Slide = React.forwardRef(({height, color, name, ...props}, ref) => {

    const MainView = styled.div`
        height: ${height}px;
        width: 100%;
        background-color: ${color};
        overflow: hidden;       
    `;

    return(
        <MainView ref={ref}>{props.children}</MainView>
    )
});

export default Slide;