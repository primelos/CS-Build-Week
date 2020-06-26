import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import Game from './gameLife'
import Fade from "react-reveal/Fade";

const H = styled.h1`
font-size: 5em;
margin-top: 250px;
padding-bottom:50px;
animation: color-change 3s infinite;
@keyframes color-change {
  10% { color: Yellow; }
  50% { color: Green; }
  100% { color: Silver; }
}
font-family: 'Open Sans Condensed', sans-serif;
box-shadow: inset 0px 0px 20px 12px black;
}
`;
const DivA = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const HomePage = () => {
  return (
    <div>
        <Fade delay={900}>
      <H>The Game of Life</H>
      <DivA>
        <Link className='enter' to="/game">Enter the Game</Link>
      </DivA>
      </Fade>
    </div>
  );
};

export default HomePage;
