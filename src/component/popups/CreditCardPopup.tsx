import PageLink from '../PageLink';
import Popup from '../Popup';
import './CreditCardPopup.css'

interface CreditCardPopupProps {
    onClose?: () => void;
}
function CreditCardPopup({ onClose }: CreditCardPopupProps) {
    return (
        <Popup title='' className = "pop" onClose={onClose} content={(
            <div className="caption">
                <p className='con'>
                    Congrats!
                </p>
                <p className='token'>
                    You got a token! Click the link below to get $100!
                </p>
                <div className='link'>
                    <PageLink linkTo='creditcard' text='Click here!' />
                </div>
                
            </div>
        )} />
    );
}

export default CreditCardPopup;