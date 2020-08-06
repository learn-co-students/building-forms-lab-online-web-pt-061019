import React, { Component } from 'react'

const Bands = props => {
  const bands = props.bands.map(band => {
    return <li key={band.name}>{band.name}</li>
  })

  return  (
    <div>
      {bands}
    </div>
  )
}

export default Bands;
