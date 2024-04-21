import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLink from '../PageLink';
import "./CreditCardPage.css"
import card from './card.png';
import robert from './robert.jpeg'

const content = "Free $100 for signing up";
const url = "https://refer.discover.com/s/sonicrules1212?advocate.partner_share_id=9790184177";

function CreditCardPage() {
    const { id } = useParams();
    

    return (
        <div className="container">
            <div className='robertt'>
                <div>
                    <p className='bolding'>
                        What is a Credit Card?
                    </p>
                    <PageSection
                        title=""
                        content={[
                            "Sign up bonuses offer $100 for FREE.",
                            "Up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
                            "Cashback can be redeemed for cash or for gift cards at a 10% discount.",
                            "Using a credit card is superior to cash or a debit card.",
                            "Building your credit score leads to cheaper mortgage rates or car loans when needed."
                        ]}
                    />
                    <p className='bolding'>
                        Rewards:
                    </p>
                    <PageSection
                        title=""
                        content={[
                            "They have sign up bonuses that give you $100 for FREE.",
                            "You can have up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
                            "This cashback can be redeemed for cash or for gift cards at a 10% discount.",
                            "Using a credit card is simply just superior to cash or a debit card.",
                            "You can build your credit score so you can have cheaper mortgage rates or car loans when you need those."
                        ]}
                    />
                </div>
                
                <div>
                    <img src = {robert} className='robert'/>
                </div>
            </div>
            
            <div className='chunk'>
                <div>
                    {<PageSection
                        title="Now that you understand, sign up!"
                        contentNode={<a className='font-semibold border-2 border-black rounded-md mt-4 px-2 py-0.5' href={url}>{content}</a>}
                    />}

                    <div className='mt-4 mx-8'>
                        <Link className='underline font-semibold' to='/'>Go Back</Link>
                    </div>
                </div>
                <div>
                    <img src={card} className='card' />
                </div>
            </div>
            
        </div>
    );
};


interface PageSectionProps {
    title: string;
    content?: string[];
    contentNode?: React.ReactNode;
}

const PageSection = ({ title, content, contentNode }: PageSectionProps) => {
    return (
        <div className='mx-12 mb-6 '>
            <h2>{title}</h2>
            {!!content ? <ul className='list-disc mx-8'>{content.map((item: string, index: number) => <li key={index}>{item}</li>)}</ul> : <></>}
            {!!contentNode ? contentNode : <></>}
        </div>
    );
};

export default CreditCardPage;
