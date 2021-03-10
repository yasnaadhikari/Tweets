import React, { useState } from 'react';
import "./App.css"

function Tweet({ name, message }) {

    const [backgroundColor, setBackgroundColor] = useState('white')



    const [icon, setIcon] = useState('like')


    const share = () => {
        console.log('Tweet Shared')
    }

    const like = () => {

        if (backgroundColor === 'red') {
            setBackgroundColor('white')
        } else {
            setBackgroundColor('red');
        }

        console.log(backgroundColor)


    }


    const likeActive = () => {
        if (icon === 'like') {
            setIcon('like-active')
        } else {
            setIcon('like')
        }
    }


    return (
        <div className='tweet'>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3 style={{ backgroundColor: backgroundColor }}>Number of Likes</h3>

            <div className="iconContainer">
                <img src="icons/share.png" className='icon' width='20px' height='20px' onClick={share} />
                <img src="icons/retweet.png" className='icon' width='10px' height='10px' />



                <img src={`icons/${icon}.png`} width='10px' height='10px' onClick={likeActive} style={{ backgroundColor: backgroundColor }} />


            </div>

        </div>
    );
}

export default Tweet;