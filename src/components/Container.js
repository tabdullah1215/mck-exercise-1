import React from 'react';
import styled from 'styled-components';

const MainView = styled.div`
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    `;

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainView id="main">
                Hello World!
            </MainView>
        );
    }
}

export default Container;