import React from 'react';

const Bands = props => {
    const bands = props.bands.map((band, index) => {
        return <li key={band.id}>{band.name}</li>
    })

    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands