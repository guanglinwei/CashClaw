import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CreditCardPage from './pages/CreditCardPage';

interface PageSectionProps {
    title: string;
    content: string[];
}

export const PageSection = ({ title, content }: PageSectionProps) => {
    return (
        <div className='mx-12 mb-6'>
            <h2>{title}</h2>
            {typeof content === 'string' ? <p>{content}</p> : <ul className='list-disc mx-8'>{content.map((item: string, index: number) => <li key={index}>{item}</li>)}</ul>}
        </div>
    );
};

interface ContentPageProps {
    title?: string;
    content?: React.ReactNode;
}

function ContentPage({ }) {
    const { id } = useParams();
    const [pageData, setPageData] = useState<React.ReactNode>(null);

    // const allPagesData: { [index: string]: ContentPageProps } = {
    //     'creditcard': {
    //         title: 'Credit Cards',
    //         content: (
    //             <div>Hello</div>
    //         )
    //     }
    // };
    const allPagesData: { [index: string]: React.ReactNode } = {
        'creditcard': <CreditCardPage />
    };

    useEffect(() => {
        console.log(id)
        if (!id) {
            setPageData(null);
            return;
        }
        setPageData(allPagesData[id] || null);
        console.log(pageData)
    }, [id]);

    // return (<div className='w-full mt-20'>
    //     <div className='text-2xl text-center mx-auto font-semibold py-2'>{pageData.title}</div>
    //     {pageData.content}</div>
    // );
    return (<div className='w-full mt-20'>{pageData}</div>);
}

export default ContentPage;
