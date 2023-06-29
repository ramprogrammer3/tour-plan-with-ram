import React, { useState } from 'react'
import data from './data'
import Tours from "./components/Tours"

const App = () => {

  const [tours, setTours] = useState(data)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No Tour Left</h2>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>

      <div className='container' >
        <div className='title'>Plan with ram</div>
      </div>

      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>

    </div>
  )
}

export default App