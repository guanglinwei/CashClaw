/*
import React from 'react';
import logo from './logo.svg';
import './CreditCardPage.css'

function App() {
    return (
        <div className="credit-card-page">
        <h1 className="title">WHAT IS A CREDIT CARD?</h1>
        <p className="description">
          Credit Cards are a financial tool that enables individuals to make purchases on credit, meaning that they would be spending money that is not theirs. Credit Cards are superior to a debit card in many ways if used correctly. If paid off every month it is essentially a debit card with extra benefits. You can also contest charges on a credit card but on a debit card there is nothing you can do except in cases of fraud.
        </p>
        <h2 className="subtitle">REWARDS:</h2>
        <p className="description">
          They have sign up bonuses that give you $100 for FREE and can have up to 5% cashback on categories like restaurant purchases or amazon purchases. This cashback can be redeemed for cash or for gift cards at a 10% discount. Using a credit card is simply just superior to cash or a debit card. This also helps build your credit score so you can have cheaper mortgage rates or car loans when you need those.
        </p>
        */
import { useEffect, useRef, useState } from 'react';
import CraneGame from './component/CraneGame';
import Popup, { PopupProps } from './component/Popup';
import React from 'react';
import Navbar from './component/Navbar';
import CreditCardPopup from './component/popups/CreditCardPopup';
import Instructions from './component/popups/Instructions';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ContentPage from './component/ContentPage';
// import TestPage from './component/pages/TestPage';
function App() {
    const onModalClosed = () => {
        console.log("modal closed")
        setGamePaused(false);
        setPopupVisible(false)
    };
    const possiblePopups = [<CreditCardPopup onClose={(onModalClosed)} />];
    const currentPopup = useRef<React.ReactNode>(undefined);

    const [gamePaused, setGamePaused] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    useEffect(() => {
        console.log('here')
        currentPopup.current = (<Instructions onClose={onModalClosed} />);
        console.log(currentPopup.current);
        setPopupVisible(true);
        // setGamePaused(false);
    }, []);

    const onCraneGameFinish = () => {
        const index = Math.floor(Math.random() * possiblePopups.length);
        currentPopup.current = possiblePopups[index];
        console.log(currentPopup)
        setPopupVisible(true);
    };

    return (
        // <div className="App h-screen">
        //     <Navbar/>
        //     {popupVisible ? <Popup title={"Title"} content={<div>Put </div>} /> : <></>}
        //     <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
        //     <CraneGame onFinish={onCraneGameFinish} />
        // </div>

        // <Instructions/>
        // <div className="App h-screen">
        //     <Navbar/>
        //     {popupVisible ? <Popup title={"Title"} content={<div>Put content here</div>} onClose={onModalClosed} /> : <></>}
        //     <div className='text-2xl text-center mx-auto font-semibold py-2'>Cash Claw</div>
        //     <CraneGame onFinish={onCraneGameFinish} />
        // </div>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path='/'>
                    <Route index element={
                        <div className="App h-screen">
                            {popupVisible ? currentPopup.current : <></>}
                            <div className='text-2xl text-center mx-auto font-semibold pb-2 pt-20'></div>
                            <CraneGame onFinish={onCraneGameFinish} paused={gamePaused} setPaused={setGamePaused} />
                        </div>} />
                    <Route path='/:id' element={<ContentPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
