import React, { Component } from "react";
// import Grid from './Grid'

import {
  ButtonToolbar,
  Button,
} from "react-bootstrap";

class Buttons extends Component {
    handleSelect = (evt) => {
      this.props.gridSize(evt);
    };
    render() {
      return (
        <div className="center">
          <ButtonToolbar>
            <Button  variant="success" onClick={this.props.playButton}>
              Play
            </Button>
            <Button  onClick={this.props.pauseButton}>
              Pause
            </Button>
            <Button  onClick={this.props.clear}>
              Clear
            </Button>
            {/* <Button  onClick={this.props.slow}>
              Slow
            </Button>
            <Button  onClick={this.props.fast}>
              Fast
            </Button>
            <Button  onClick={this.props.renew}>
              Renew
            </Button>
            <DropdownButton
              title="Grid Size"
              id="size-menu"
              onSelect={this.handleSelect}
            >
              <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
              <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
              <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
            </DropdownButton> */}
          </ButtonToolbar>
        </div>
      );
    }
  }


export default Buttons