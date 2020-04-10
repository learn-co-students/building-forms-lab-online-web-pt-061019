// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  // constructor() {
  //   super(),
  //
  //   state = {
  //     text: ''
  //   }
  // }

  // const {addBand} = this.props

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();

    let obj = this.state

    this.props.addBand(obj)

    this.setState({
      name: ''
    })
  }

  // addBand = (event) => {
  //   event.preventDefault();
  //   this.dispatch(addBand)
  // }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default BandInput
