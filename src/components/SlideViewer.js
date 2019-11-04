import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-sticky-el';
import Slide from './Slide';
import Header from "./Header";
import navItems, {headerStyles} from '../constants';
import DynamicSlide from './DynamicSlide';
import PropTypes from 'prop-types';

const MainView = styled.div`
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    `;

class SlideViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            scrollStatus: '',
            shrink: false
        };
        this._timeout = null;
    }

    componentWillUnmount(){
        clearTimeout(this._timeout);
    }

    getClosestInViewRef = () => {
        let headerHeight = this.header && this.header.getBoundingClientRect().height;
        let mainHeight = this.main && this.main.getBoundingClientRect().height;
        return navItems.reduce((acc, item) => {
            let itemTop = this[item.name] && this[item.name].getBoundingClientRect().top;
            if(itemTop > headerHeight - 20 &&
                itemTop < acc.posY) {
                return {name: item.name, posY: itemTop};
            }
            return acc;
        }, {name: 'main', posY: this.main && mainHeight});
    };

    handleScroll = (event) => {
        event.preventDefault();
        const closestRef = this.getClosestInViewRef().name;
        if(this._timeout){
            clearTimeout(this._timeout);
        }
        this._timeout = setTimeout(() => {
            this._timeout = null;
            this.setState({
                scrollStatus:'stopped',
                activeItem: closestRef,
                shrink: closestRef !== 'intro'
            });
        },500);
        if(this.state.scrollStatus !== 'scrolling') {
            this.setState({
                scrollStatus:'scrolling'
            });
        }
    };

    setActiveItem = (activeItem) => {
        //scrolling the ref triggers the onScroll event which adds the selected item into state
        this[activeItem].scrollIntoView({block: 'end', behavior: 'smooth'});
    };

    render() {
        const {activeItem, shrink} = this.state;
        const {contentMap} = this.props;
        return (
            <MainView id="main" className="main" onScroll={this.handleScroll} ref={(ref) => this.main = ref}>
                <Sticky scrollElement=".main">
                    <Header ref={(ref) => this.header = ref}
                            name="header"
                            activeItem={activeItem}
                            setActiveItem={this.setActiveItem}
                            headerStyles={headerStyles}
                            shrink={shrink}
                    />
                </Sticky>
                {
                    Object.keys(contentMap).map((slideName, i) => {
                        return <Slide key={i} ref={(ref) => this[slideName] = ref} name={slideName} height="520" color="white">
                            <DynamicSlide slideName={slideName} contentMap={contentMap}/>
                        </Slide>
                    })
                }

            </MainView>
        );
    }
}

export default SlideViewer;

SlideViewer.propTypes = {
    contentMap: PropTypes.objectOf(PropTypes.object).isRequired
};