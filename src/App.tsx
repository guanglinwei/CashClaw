import Popup, { PopupProps } from './component/Popup';
import React from 'react';

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

            <button onClick={help} className = "help">
                Help?
            </button>

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

        </div>
        
    );
}

export default App;
