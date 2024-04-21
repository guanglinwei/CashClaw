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
    }
;
    return (

        <Navbar/>
        
    );
}

export default App;
