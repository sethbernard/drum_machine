import React, { Component } from "react";

class DrumPad extends Component {
  handleClick = () => {
    this.audio.play();
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
    }
  };

  render() {
    return (
      <div className="drumPad" onClick={() => this.handleClick()}>
        {this.props.text}
        <audio ref={audio => (this.audio = audio)} src={this.props.url} />
      </div>
    );
  }
}

export default DrumPad;
