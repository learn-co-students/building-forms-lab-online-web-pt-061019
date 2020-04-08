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

  // state = {
  //   text: ''
  // }



  render() {
    return(
      <div>
        Band Input
        <input type="text" name={this.state.text} />
      </div>
    )
  }
}

export default BandInput
