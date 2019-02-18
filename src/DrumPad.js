import React, { Component } from "react";

class DrumPad extends Component {
  handleClick = () => {
    this.audio.play();
  };

  handleKeyPress = e => {
    if (e.keyCode === this.props.keyCode) {
      console.log(this.props.keyCode);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div
        className="drumPad"
        onClick={() => this.handleClick()}
        onKeyPress={() => this.handleKeyPress()}
      >
        {this.props.text}
        <audio ref={audio => (this.audio = audio)} src={this.props.url} />
      </div>
    );
  }
}

export default DrumPad;
