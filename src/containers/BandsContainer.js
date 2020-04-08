import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import createStore from 'redux'

class BandsContainer extends Component {

  const store = createStore()

  state = {
    text: ''
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput />
      </div>
    )
  }
}

export default BandsContainer
