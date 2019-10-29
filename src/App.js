import React from 'react';
import './App.css';
import styled from 'styled-components';
import Container from './components/Container';

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
                <Container/>
            </MainView>
        </div>
    );
}

export default App;
