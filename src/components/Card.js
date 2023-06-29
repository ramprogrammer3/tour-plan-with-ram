import React, { useState } from 'react'

const Card = ({ id, image, info, name, price, removeTour }) => {

    const description = info.substring(0, 100);
    const [readMore, setReadMore] = useState(false);

    const readMoreHandler = () => {
        setReadMore(!readMore);
    }


    return (
        <div className='card'>
            <img className='image' src={image} alt="" />
            <div className="content-wrapper">
                <p className='tour-price'> ₹ {price} </p>
                <h3 className='tour-name'> {name} </h3>
                <p className='tour-description'>
                    {readMore ? `${info}` : `${description}`}
                    <span onClick={readMoreHandler} className='read-more'>
                        {readMore ? `...Show less` : `...Read more`}
                    </span>
                </p>
            </div>
            <button className='btn' onClick={() => removeTour(id)}>Not Interested </button>
        </div>
    )
}

export default Card