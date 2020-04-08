// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  // state = {
  //   //set up a controlled form with internal state
  //   name: ''
  // }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const band = {...this.state}
    this.props.addBand(band)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
