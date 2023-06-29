import React from 'react'
import Card from './Card'

const Tours = ({ tours, removeTour }) => {
    console.log(tours)
    return (
        <div className='card-container'>
            {
                tours.map((tour) => {
                    return <Card {...tour} key={tour.id} removeTour={removeTour} />
                })
            }
        </div>
    )
}

export default Tours