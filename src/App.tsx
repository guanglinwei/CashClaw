import { useState } from 'react';
import CraneGame from './component/CraneGame';
import Popup, { PopupProps } from './component/Popup';
import React from 'react';
import Navbar from './component/Navbar';

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
  
    const [popupVisible, setPopupVisible] = useState(true);
    const onCraneGameFinish = () => {
        console.log("Go to next page");
        setPopupVisible(true);
    };

    return (
        <div className="App h-screen">
            <Navbar/>
            {popupVisible ? <Popup title={"Title"} content={<div>Put </div>} /> : <></>}
            <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
            <CraneGame onFinish={onCraneGameFinish} />
        </div>
    );
}

export default App;
