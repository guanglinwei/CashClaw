import Popup, { PopupProps } from './component/Popup';
import React from 'react';
<<<<<<< Updated upstream
=======
import Navbar from './component/Navbar';
import CreditCardPopup from './component/popups/CreditCardPopup';
import Instructions from './component/popups/Instructions';
>>>>>>> Stashed changes

function App() {

    const displayData: PopupProps[] = [{
        title: "Title here",
        content: (
            <div>
                Put content here
            </div>
        )
    },]
    const help = () => {
        alert('Hello')
    }
;
    return (

        <div className="App">
            <p className="cash">
                Cash Card
            </p>
            <div className="desc">
                Welcome to Cash Card!! Click the button to start and get a prize!
            </div>

            <button className = "help"> <img src = ".\src\help.webp" onClick={help}/></button>

            <Popup className="popup"
                title={"Cash Card"}
                content={
                <div>
                    <div>
                        Thank You! Click the link to continue.
                    </div>
                </div>
                
                } 
            />

<<<<<<< Updated upstream
        </div>
        
=======
    return (
        <Instructions/>
        // <div className="App h-screen">
        //     <Navbar/>
        //     {popupVisible ? <Popup title={"Title"} content={<div>Put content here</div>} onClose={onModalClosed} /> : <></>}
        //     <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
        //     <CraneGame onFinish={onCraneGameFinish} />
        // </div>
>>>>>>> Stashed changes
    );
}

export default App;
