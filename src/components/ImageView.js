import React, {memo} from 'react';
import styled from 'styled-components';
import Title from './Title';


const ImageView = memo((props) => {
    const MainView = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        box-sizing: border-box;
       
        color: #ffffff;
    `;
    const ImageContainer = styled.div`
        height: 95%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to right, #051C2C, darkblue);
    `;
    const Image = styled.img`
        max-height: 55%;
        margin-top: 30px;
    `;

    const {info, title} = props.content.roadmap;
    return (
      <MainView>
          <ImageContainer>
              <Title heading={title.heading} subheading={title.subheading} inverted={true}/>
              <Image src={info}/>
          </ImageContainer>
      </MainView>
    );
}, () => true);

export default ImageView;