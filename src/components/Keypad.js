// Code Keypad Component Here
import React from 'react'



export const Keypad = () => {
     const typingMessage = () => {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={() => typingMessage()}/>
        </div>
    )
}
