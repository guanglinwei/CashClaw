import React from 'react'
import Popup, { PopupProps } from './Popup';

function Navbar() {
  return (
    <div className="py-2 border-4 border-green-400 absolute top-0 w-full text-5xl text-green-400 flex items-center justify-center font-kanit font-semibold">
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