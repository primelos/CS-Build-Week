import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from './components/gameLife'
// import Game2 from './components/game2'
import { Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
import HomePage from './components/HomePage'

// const H = styled.h1`
// font-size: 5em;
// margin-top: 250px;
// padding-bottom:50px;
// animation: color-change 3s infinite;
// @keyframes color-change {
//   10% { color: Yellow; }
//   50% { color: Green; }
//   100% { color: Silver; }
// }
// font-family: 'Open Sans Condensed', sans-serif;
// box-shadow: inset 0px 0px 20px 12px black;
// }
// `
// const DivA = styled.div`
// text-align:center;
// padding-top:20px;
// `




function App() {

  return (
    <div className='main-page'>
     
      <Switch>
        <Route exact path='/'     component={HomePage} />
        <Route  path='/game' component={Game} />
      </Switch>
    </div>
  );
}

export default App;

