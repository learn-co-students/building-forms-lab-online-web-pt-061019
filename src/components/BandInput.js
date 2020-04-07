// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };

	handleChange = (e) => {
		this.setState({
			name: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBand(this.state.name);
		this.setState({
			name: ''
		});
	};

 
  render() {
    return(
    <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
        <input type="text" value ={this.state.name} onChange={e => this.handleChange(e)}/>
        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
