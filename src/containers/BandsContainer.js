import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  
  listBands = () => this.props.bands.map((b) => <li key={b.name}>{b.name}</li>)

  render() {
    return(
      <div>        
        <BandInput addBand={this.props.addBand} />
        <ul>{this.listBands()}</ul>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (band) =>
      dispatch({
        type: "ADD_BAND",
        band: { name: band }
      })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
