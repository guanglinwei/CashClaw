import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
    const [pageData, setPageData] = useState<ContentPageProps>({});

    const allPagesData: { [index: string]: ContentPageProps } = {
        'creditcard': {
            title: 'Credit Cards',
            content: (
                <div>Hello</div>
            )
        }
    };

    useEffect(() => {
        console.log(id);
        if (!id) {
            setPageData({});
            return;
        }
        setPageData(allPagesData[id] || {});
        console.log(pageData)
    }, [id]);

    return (<div className='w-full mt-20'>
        <div className='text-2xl text-center mx-auto font-semibold py-2'>{pageData.title}</div>
        {pageData.content}</div>
    );
}

export default ContentPage;
