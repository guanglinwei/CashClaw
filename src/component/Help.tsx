import React, { useEffect, useRef, useState } from 'react';
import Instructions from './popups/Instructions';

function Help() {
    const [popupVisible, setPopupVisible] = useState(false);

    const onModalClosed = () => {
        console.log("modal closed");
        setPopupVisible(false);
    };

    return (
        <div className='absolute bottom-4 left-4'>
            <button
                onClick={() => setPopupVisible(true)}
                className="block text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                <p className="font-kanit text-xl">?</p>
            </button>
        </div>
    );
}

export default Help;
