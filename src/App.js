import React from 'react';
import './App.css';
import styled from 'styled-components';
import SlideViewer from './components/SlideViewer';
import contentMap from './content';

function App() {
    const MainView = styled.section`
    height: 600px;
    max-width: 1440px;
    width: 80%;
    margin-top: 20px;
    background-color: #ffffff;
    `;

    return (
        <div className="App">
            <MainView>
                <SlideViewer contentMap={contentMap}/>
            </MainView>
        </div>
    );
}

export default App;
