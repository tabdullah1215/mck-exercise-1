import React from 'react';
import styled from 'styled-components';
import {device} from '../constants';

const Slide = React.forwardRef(({height, color, name, ...props}, ref) => {

    const MainView = styled.div`
        height: 'auto';
        width: 100%;
        background-color: ${color};
        overflow: hidden;
        padding-bottom: 25px;  
        @media ${device.laptopL} {
            height: ${height}px;
            padding-bottom: 0;
        }
    `;

    return(
        <MainView ref={ref}>{props.children}</MainView>
    )
});

export default Slide;