import React, { Component } from "react";

class DrumPad extends Component {
  state = {
    active: ""
  };

  lightUpPad = () => {
    this.setState({
      active: "active"
    });
  };

  turnOffPad = () => {
    this.setState({
      active: ""
    });
  };

  handleClick = () => {
    this.audio.play();
    this.props.display(this.props.id);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.keyCode) {
      this.audio.play();
      this.lightUpPad();
      this.props.display(this.props.id);
      setTimeout(this.turnOffPad, 400);
    }
  };

  render() {
    return (
      <div
        className={`drum-pad ${this.state.active}`}
        id={this.props.id}
        onClick={() => this.handleClick()}
      >
        {this.props.text}
        <audio
          className="clip"
          id={this.props.text}
          ref={audio => (this.audio = audio)}
          src={this.props.url}
        />
      </div>
    );
  }
}

export default DrumPad;
