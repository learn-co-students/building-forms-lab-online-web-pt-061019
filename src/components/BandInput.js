// Add BandInput component
import React, { Component } from "react";

export class BandInput extends Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const band = { ...this.state };
    this.props.addBand(band);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={this.state.name}
            placeholder="Band Name"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
