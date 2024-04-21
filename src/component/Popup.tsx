import React from 'react';

export interface PopupProps {
    title: string;
    content: React.ReactNode;
    className?: string;
    onClose?: () => void;
    showCloseButton?: boolean;
}

function Popup({ title, content, className, onClose, showCloseButton }: PopupProps) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className={`flex flex-col mx-auto px-8 bg-white rounded-lg w-[50%] ${className || ''}`}>
                        <div className='font-semibold text-2xl text-center my-2'>
                            {title}
                        </div>
                        {content}
                        <div className='flex-grow-1'>
                            <hr className='border-b-2' />
                            <div className='flex flex-row w-full align-middle items-center justify-center gap-8'>
                                <button onClick={onClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {content}
        </div>
    );
}

export default Popup;