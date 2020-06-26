import React from "react";
import { Link } from "react-router-dom";
import LightSpeed from 'react-reveal/LightSpeed';


const Rules = () => {
  return (
    <div>
        <LightSpeed left>
      <div className="rules">
        <h1 className="dark">Intro</h1>
        <p>
          The Game of Life, also known simply as Life, is a cellular automaton
          devised by the British mathematician John Horton Conway in 1970.[1] It
          is a zero-player game, meaning that its evolution is determined by its
          initial state, requiring no further input. One interacts with the Game
          of Life by creating an initial configuration and observing how it
          evolves.
        </p>
        <h2 className="dark">Rules</h2>
        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ol>
      </div>
      <div className="go-back">
        <Link to='/game' className='btn'>Go to the Game</Link>
      </div>
      </LightSpeed>
    </div>
  );
};

export default Rules;
