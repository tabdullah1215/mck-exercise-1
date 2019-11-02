import React from 'react';
import Hero from "./Hero";
import Grid from "./Grid";
import TileBoard from "./TileBoard";
import ImageView from "./ImageView";
import FaqList from "./FaqList";

const DynamicSlide = ({slideName, contentMap}) => {
    const getSlide = (name) => {
        switch(contentMap[name].component) {
            case 'Hero':
                return <Hero contentMap={contentMap[name]} />;
            case 'Grid':
                return <Grid contentMap={contentMap[name]} />;
            case 'TileBoard':
                return <TileBoard contentMap={contentMap[name]} />;
            case 'ImageView':
                return <ImageView contentMap={contentMap[name]} />;
            case 'FaqList':
                return <FaqList contentMap={contentMap[name]} />;
        }
    };
    return(
        <React.Fragment>
            {getSlide(slideName)}
        </React.Fragment>
    );
};

export default DynamicSlide;