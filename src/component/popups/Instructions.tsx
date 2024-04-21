import Popup from '../Popup';
import './Instructions.css';
import keys from './arrow_keys.png';
interface InstructionsProps {
    onClose?: () => void;
}
function Instructions({ onClose }: InstructionsProps) {
    return (
        <Popup title='How to play?' className="intro" onClose={onClose} content={(
            <div className="how">

                <p>
                    Welcome to Cash Card!! Click the button to start and get a prize!
                </p>
                {/* <Keys/> */}
                <img src={keys} />
            </div>
        )} />
    );
}

export default Instructions;