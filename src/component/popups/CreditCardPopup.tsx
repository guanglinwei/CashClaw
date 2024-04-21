import Popup from '../Popup';
import './CreditCardPopup.css'

interface CreditCardPopupProps {
    onClose?: () => void;
}
function CreditCardPopup({ onClose }: CreditCardPopupProps) {
    return (
        <Popup title='Congrats' className="pop" onClose={onClose} content={(
            <div className="caption">
                You have gotten a token! Click this link to get the referral and start making money.
            </div>
        )} />
    );
}

export default CreditCardPopup;