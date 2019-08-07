import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 140,
      value: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      text: this.props.maxChars - (event.target.value).length,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.value}/>
        <p>Chars Left: {this.state.text}</p>
      </div>
    );
  }
}

export default TwitterMessage;
