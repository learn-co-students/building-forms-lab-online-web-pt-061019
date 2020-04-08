import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

const addBand = band => {
  return {
    type: "ADD_BAND",
    band
  }
}

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => {
      return <li>{band.name}</li>
    })
  }

  render() {
    return(
      <div>
        <BandInput
          addBand={this.props.addBand}
        />
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch(addBand(band))
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
