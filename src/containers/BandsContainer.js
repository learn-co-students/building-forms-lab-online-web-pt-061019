import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
// import createStore from 'redux'
// import manageBand from '../reducers/manageBand'
import {connect} from 'react-redux'


class BandsContainer extends Component {

  // const store = createStore(manageBand);

  // state = {
  //   text: ''
  // }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = ({bands}) => ({bands})
//
// // const mapDispatchToProps = (dispatch) => ({
// //   addBand: ({addBand: band => dispatch({type: 'ADD_BAND'})})
// // })
//
// const mapDispatchToProps = (dispatch) => ({ addBand: band => dispatch({ type: "ADD_BAND", band });
//
// export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)

// export default BandsContainer

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
