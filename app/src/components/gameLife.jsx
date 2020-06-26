import React, { Component } from "react";
import Grid from './Grid'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import "../App.css";
import Spin from 'react-reveal/Spin';

class Game extends Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }
  arrayClone = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  }
  selectBox = (row, col) => {
    let gridCopy = this.arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };
  renew = () => {
    let gridCopy = this.arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy,
    });
  };
  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };
  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };
  fast = () => {
    this.speed = 50;
    this.playButton();
  };
  clear = () => {
    let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0,
    });
    this.pauseButton()
  };
  gridSize = (size) => {
    switch (size) {
      case "1":
        this.cols = 15;
        this.rows = 5;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 60;
        this.rows = 40;
    }
    this.clear();
    
  };

  resetGame = () => {
    if (this.state.generation === 1000){
      this.clear()
      this.renew()
    }
  }

  play = () => {
    let g = this.state.gridFull;
    let g2 = this.arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let count = 0;
          if (i > 0) if (g[i - 1][j]) count++;
          if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
          if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
          if (j < this.cols - 1) if (g[i][j + 1]) count++;
          if (j > 0) if (g[i][j - 1]) count++;
          if (i < this.rows - 1) if (g[i + 1][j]) count++;
          if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
          if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
          if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
          if (!g[i][j] && count === 3) g2[i][j] = true;
        }
    }

    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1,
     
    });
  };
  componentDidMount() {
    this.renew();
    this.playButton();
    if(this.state.generations === 100){
      this.setState(this.renew)
    }
  }

  render() {
    return (
      <div>
        <Spin>
        <h1 className='title-game'>John Conway's The Game of Life</h1>
        </Spin>
        <div className='instructions-div'>
          <Link to="/rules" className='instruc'>Instructions</Link>
        </div>
        <div className='screen-control'>
        <Buttons
          generation={this.state.generation}
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          renew={this.renew}
          gridSize={this.gridSize}
        />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        </div>
        
      </div>
    );
  }
}


export default Game;
