import React from 'react'
import Popup, { PopupProps } from './Popup';

function Navbar() {
  return (
    <div className="py-2 rounded-b-3xl bg-white border-b-5 border-green-600 absolute top-0 w-full text-5xl text-green-600 flex items-center justify-center font-kanit font-semibold shadow-sm">
            <p className= "animate-slidein">
                Cash Claw
            </p>
            {/* <div className="desc">
                Welcome to Cash Claw!! Click the button to start and get a prize!
            </div> */}
        </div>
  )
}

export default Navbar