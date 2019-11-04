import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-sticky-el';
import Slide from './Slide';
import Header from "./Header";
import {headerStyles} from '../constants';
import DynamicSlide from './DynamicSlide';
import PropTypes from 'prop-types';

const MainView = styled.div`
        height: 100%;
        background-color: #ffffff;
        overflow: auto;
    `;

/*
    this component is main viewing container and serves as
     the layout engine that binds the header to the top
     of the container, then scaffolds the content into the
     slide wrappers that use dynamic loader to determine the required views
 */
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
    /*
        determines and returns the closest slide to the header after a manual scroll to update
        active status and move the menu bar accordingly
    */
    getClosestInViewRef = () => {
        const {contentMap} = this.props;
        const navItems = Object.keys(contentMap);
        let headerHeight = this.header && this.header.getBoundingClientRect().height;
        let mainHeight = this.main && this.main.getBoundingClientRect().height;
        return navItems.reduce((acc, item) => {
            let itemTop = this[item] && this[item].getBoundingClientRect().top;
            if(itemTop > headerHeight - 20 &&
                itemTop < acc.posY) {
                return {name: item, posY: itemTop};
            }
            return acc;
        }, {name: 'main', posY: this.main && mainHeight});
    };
    /*
        handles scroll events, both manual scroll and scrollintoview,
        updates state with the current in-view slide and triggers animated shrinking of header
        uses debounce (throttling) to limit setting of state to every 500ms
    */
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
    /*
        maps the active item to the appropriate slide ref and slides it into view
    */
    setActiveItem = (activeItem) => {
        //scrolling the ref triggers the onScroll event which adds the selected item into state
        this[activeItem].scrollIntoView({block: 'end', behavior: 'smooth'});
    };

    render() {
        const {activeItem, shrink} = this.state;
        const {contentMap} = this.props;
        const navItems = Object.keys(contentMap);
        return (
            <MainView id="main" className="main" onScroll={this.handleScroll} ref={(ref) => this.main = ref}>
                <Sticky scrollElement=".main">
                    <Header ref={(ref) => this.header = ref}
                            name="header"
                            activeItem={activeItem}
                            setActiveItem={this.setActiveItem}
                            headerStyles={headerStyles}
                            shrink={shrink}
                            navItems={navItems}
                    />
                </Sticky>
                {
                    navItems.map((slideName, i) => {
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