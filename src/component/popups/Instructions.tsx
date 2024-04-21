import Popup from '../Popup';
import './Instructions.css';
import keys from './arrow_keys.png';
interface InstructionsProps {
    onClose?: () => void;
}
function Instructions({ onClose }: InstructionsProps) {
      return (
            <Popup title='' className="intro" content={(
                  <div className="how">
                        <p className='play'>
                              How to play?
                        </p>
                        <p className='welcome'>
                              Welcome to Cash Card!! Click the button to start and get a prize!
                        </p>
                        {/* <Keys/> */}
                        <div className='together'>
                              <div className = "pic">
                                    <img src={keys} />
                              </div>
                              <div className = "instr">
                                    Use the left and right keys to move the claw side to side. Then use the down key once you have chosen a token to pick up.
                              </div>
                        </div>
                        
                  </div>
            )} />
      );
}

export default Instructions;