import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLink from '../PageLink';
import Typewriter from "typewriter-effect";

const content = "Free $100 for signing up";
const url = "https://refer.discover.com/s/sonicrules1212?advocate.partner_share_id=9790184177";

function CreditCardPage() {
    const { id } = useParams();
    const array1 = ["Payment Tool: Borrow money to make purchases with a credit limit.", "Revolving Credit: Borrowed money must be repaid later, unlike debit cards.", "Interest Charges: Interest applies if the balance isn't paid in full monthly.",
    "Fees: Annual fees, late payment fees, and other charges may apply.",
    "Credit Score Impact: Using responsibly can improve credit scores.",
    "Security Features: Fraud and purchase protection are common.",
    "Useful Features: Cashback, travel miles, and more.",
    "Statement: Monthly summary of transactions and balance."];

                 const array2= ["- They have sign up bonuses that give you $100 for FREE and can have up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
                             "- This cashback can be redeemed for cash or for gift cards at a 10% discount.",
                              "- Using a credit card is simply just superior to cash or a debit card.",
                              "- You can build your credit score now so you can have cheaper mortgage rates or car loans when you need those."];
    const updatedNums = array1.map((number)=>{
                    return <li>{number}</li>;
                });

        const updatedNums2 = array2.map((number)=>{
                    return <li>{number}</li>;
                });
    
    

    return (
        // <div className="container text-green-600">
        //     <PageSection

            
        //         title="What is a Credit Card?"
        //         content={[
        //             "Sign up bonuses offer $100 for FREE.",
        //             "Up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
        //             "Cashback can be redeemed for cash or for gift cards at a 10% discount.",
        //             "Using a credit card is superior to cash or a debit card.",
        //             "Building your credit score leads to cheaper mortgage rates or car loans when needed."
        //         ]}
        //     />
        //     <PageSection
        //         title="Rewards:"
        //         content={[
        //             "They have sign up bonuses that give you $100 for FREE and can have up to 5% cashback on categories like restaurant purchases or Amazon purchases.",
        //             "This cashback can be redeemed for cash or for gift cards at a 10% discount.",
        //             "Using a credit card is simply just superior to cash or a debit card.",
        //             "You can build your credit score so you can have cheaper mortgage rates or car loans when you need those."
        //         ]}
        //     />
        //     {<PageSection
        //         title="Now that you understand, sign up!"
        //         contentNode={<a className='font-semibold border-2 border-black rounded-md mt-4 px-2 py-0.5' href={url}>{content}</a>}
        //     />}

        //     <div className='mt-4 mx-8'>
        //         <Link className='underline font-semibold' to='/'>Go Back</Link>
        //     </div>
        // </div>

        //first paragraph
        <div className = "container text-green-600 absolute left-8 pt-7">
        
        {/* 1st paragraph */}
        <div>
            <h1 className='text-3xl font-kanit font-semibold'>What is a credit card?</h1>
            <br />

            <ul className= "font-mono font-medium">
                {updatedNums}
            </ul>
        </div>


        {/* 2nd paragraph */}
        <div className= "mt-8">
            <h1 className='text-3xl font-kanit font-semibold'>Rewards</h1>
            <br />

            <ul className= "font-mono font-medium">
                {updatedNums2}
            </ul>
        </div>

<div className='absolute mt-8'>
    <h2 className= "text-4xl font-kanit font-semibold"><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(3000)
                        .typeString("Now that you understand,")
                        .pauseFor(850)
                        .typeString(" Sign up!")
                        .start();
                }}
            /></h2>
    <div className = "mt-4"> <p><a className='font-semibold border-2 border-green-600 rounded-md mt-4 px-2 py-0.5 text-lg' href={url}>{content}</a></p></div>
   
    <div className='mt-4'>
                <Link className='underline font-kanit font-semibold' to='/'>Go Back</Link>
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
        <div className='mx-12 mb-6'>
            <h2>{title}</h2>
            {!!content ? <ul className='list-disc mx-8'>{content.map((item: string, index: number) => <li key={index}>{item}</li>)}</ul> : <></>}
            {!!contentNode ? contentNode : <></>}
        </div>
    );
};

export default CreditCardPage;
