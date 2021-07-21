import React from 'react'

export default function Start({setUsername}) {
    return (
        <div className='start'>
            <input placeholder="Enter your name" className='startInput'/>
            <button className='startButton'>Start</button>
        </div>
    )
}
