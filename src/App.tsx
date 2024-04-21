import { useState } from 'react';
import CraneGame from './component/CraneGame';
import Popup, { PopupProps } from './component/Popup';
import React from 'react';
import Navbar from './component/Navbar';
import CreditCardPopup from './component/popups/CreditCardPopup';
import Instructions from './component/popups/Instructions';

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
    };
  /*
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
    };
    */
  
    const [popupVisible, setPopupVisible] = useState(true);
    const onCraneGameFinish = () => {
        console.log("Go to next page");
        setPopupVisible(true);
    };
    return (
        // <div className="App h-screen">
        //     <Navbar/>
        //     {popupVisible ? <Popup title={"Title"} content={<div>Put </div>} /> : <></>}
        //     <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
        //     <CraneGame onFinish={onCraneGameFinish} />
        // </div>
        
        <Instructions/>
        // <div className="App h-screen">
        //     <Navbar/>
        //     {popupVisible ? <Popup title={"Title"} content={<div>Put content here</div>} onClose={onModalClosed} /> : <></>}
        //     <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
        //     <CraneGame onFinish={onCraneGameFinish} />
        // </div>
        
    );
}

export default App;
