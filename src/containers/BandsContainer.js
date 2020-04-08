import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";
import { addBand } from "../actions/index";

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map((band) => <li>{band.name} </li>);
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{bands}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands };
};

export default connect(mapStateToProps, { addBand })(BandsContainer);
