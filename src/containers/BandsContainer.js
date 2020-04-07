import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  bandsLi = () => this.props.bands.map((b) => <li key={b.name}>{b.name}</li>);

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>{this.bandsLi()}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		bands: state.bands
	};
};

const mapDispatchToProps = (dispatch) => ({
	addBand: (band) =>
		dispatch({
			type: 'ADD_BAND',
			band: { name: band }
		})
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
