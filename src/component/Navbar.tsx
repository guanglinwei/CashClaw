import React from 'react'
import Popup, { PopupProps } from './Popup';

function Navbar() {
  return (
    <div className="h-24 border-4 relative text-5xl text-green-400 flex items-center justify-center font-kanit font-semibold">
            <p className= "animate-slidein">
                Cash Card
            </p>
            {/* <div className="desc">
                Welcome to Cash Card!! Click the button to start and get a prize!
            </div> */}
        </div>
  )
}

export default Navbar