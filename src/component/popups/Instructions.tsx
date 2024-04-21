import Popup from '../Popup';
import './Instructions.css'
// import Keys from '.arrow_keys.png'

function Instructions() {
    return (
        <Popup title='How to play?' className = "intro" content={(
            <div className="how">
                
                <p>
                  Welcome to Cash Card!! Click the button to start and get a prize!
                </p>
                  <Keys/>
            </div>
        )} />
    );
}

export default Instructions;