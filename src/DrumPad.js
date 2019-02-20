import React, { Component } from "react";

class DrumPad extends Component {
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
    return e.keyCode === this.props.keyCode
      ? this.audio.play() && this.props.display(this.props.id)
      : null;
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={() => this.handleClick()}
        onKeyPress={this.props.style}
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
