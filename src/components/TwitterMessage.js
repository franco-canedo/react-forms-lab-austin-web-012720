import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ""
    };
  }

  handleInputChange = (event) => {
    console.log("working?")
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.inputValue.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} 
            onChange={this.handleInputChange}/>
            {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
