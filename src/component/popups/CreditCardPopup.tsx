import Popup from '../Popup';
import './CreditCardPopup.css'

function CreditCardPopup() {
    return (
        <Popup title='' className = "pop" content={(
            <div className="caption">
                <p className='con'>
                    Congrats!
                </p>
                <p>
                    You have gotten a token! Click this link to get the referral and start making money.
                </p>
                <button>
                    link
                </button>
            </div>
        )} />
    );
}

export default CreditCardPopup;