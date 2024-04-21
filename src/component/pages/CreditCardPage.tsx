import React from 'react';
import logo from './logo.svg';
import './CreditCardPage.css'
import { PageSection } from '../ContentPage';

const CreditCardPage = () => {
    return (
        <div className="container">
            <PageSection
                title="What is a Credit Card?"
                content={[
                    "Sign up bonuses offer $100 for FREE.",
                    "Up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
                    "Cashback can be redeemed for cash or for gift cards at a 10% discount.",
                    "Using a credit card is superior to cash or a debit card.",
                    "Building your credit score leads to cheaper mortgage rates or car loans when needed."
                ]}
            />
            <PageSection
                title="Rewards:"
                content={[
                    "They have sign up bonuses that give you $100 for FREE and can have up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
                    "This cashback can be redeemed for cash or for gift cards at a 10% discount.",
                    "Using a credit card is simply just superior to cash or a debit card.",
                    "You can build your credit score so you can have cheaper mortgage rates or car loans when you need those."
                ]}
            />
            {/* <PageSection
                title="Sign Up Now:"
                content={<a href="#">INSERT LINK HERE</a>}
            /> */}
        </div>
    );
};

export default CreditCardPage;