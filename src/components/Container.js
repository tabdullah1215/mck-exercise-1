import React from 'react';
import styled from 'styled-components';
import Header from "./Header";
import navItems from '../constants';

const MainView = styled.div`
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    `;

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: ''
        };
    }

    setActiveItem = (activeItem) => {
        this.setState({
            activeItem
        });
    };

    render() {
        const {activeItem} = this.state;
        return (
            <MainView id="main" className="main" ref={(ref) => this.main = ref}>
                <Header ref={(ref) => this.header = ref} name="header" navItems={navItems} activeItem={activeItem} setActiveItem={this.setActiveItem}/>
            </MainView>
        );
    }
}

export default Container;