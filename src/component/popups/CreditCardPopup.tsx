import Popup from '../Popup';
import './CreditCardPopup.css'

function CreditCardPopup() {
    return (
        <Popup title='Congrats' className = "pop" content={(
            <div className="caption">
                You have gotten a token! Click this link to get the referral and start making money.
            </div>
        )} />
    );
}

export default CreditCardPopup;