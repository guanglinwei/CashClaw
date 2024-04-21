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
import { useState } from 'react';
import CraneGame from './component/CraneGame';
import Popup, { PopupProps } from './component/Popup';
import React from 'react';
import Navbar from './component/Navbar';

function App() {
    const displayData: PopupProps[] = [{
        title: "Title here",
        content: (
            <div>
                Put content here
            </div>
        )
    },]
    const help = () => {
        alert('Hello')
    };
  /*
    return (

        <div className="App">
            <p className="cash">
                Cash Card
            </p>
            <div className="desc">
                Welcome to Cash Card!! Click the button to start and get a prize!
            </div>

            <button className = "help"> <img src = ".\src\help.webp" onClick={help}/></button>

            <Popup className="popup"
                title={"Cash Card"}
                content={
                <div>
                    <div>
                        Thank You! Click the link to continue.
                    </div>
                </div>
                
                } 
            />
    };
    */
  
    const [popupVisible, setPopupVisible] = useState(false);
    const onCraneGameFinish = () => {
        console.log("Go to next page");
        setPopupVisible(true);
    };
    const onModalClosed = () => {
        setPopupVisible(false)
        
    };

    return (
        <div>
            <Navbar />
            {popupVisible ? <Popup title={"Title"} content={<div>Put content here</div>} onClose={onModalClosed} /> : <></>}

            <CraneGame onFinish={onCraneGameFinish} />
        </div>
    );
}

export default App;
