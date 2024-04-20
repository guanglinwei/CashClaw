import React from 'react';

export interface PopupProps {
    title: string;
    content: React.ReactNode;
    className?: string;
    // ... add more stuff here
}

function Popup({ title, content, className }: PopupProps) {
    return (
        <div className={`mx-auto px-8 ${className || ''}`}>
            <div className='font-semibold text-2xl text-center my-2'>
                {title}
            </div>
            {content}
        </div>
    );
}

export default Popup;