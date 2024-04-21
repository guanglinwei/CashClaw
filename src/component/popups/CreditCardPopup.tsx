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
                    You have gotten a token! Click the link below to get the referral and start making money.
                </p>
                
                <PageLink linkTo='creditcard' text='Link here!' />
            </div>
        )} />
    );
}

export default CreditCardPopup;