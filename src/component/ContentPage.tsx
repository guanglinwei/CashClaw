import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

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
        if (!id) {
            setPageData({});
            return;
        }

        setPageData(allPagesData[id] || {});
        console.log(pageData)
    }, [id]);

    return (
        <div className='w-full'>    
            <div className='text-2xl text-center mx-auto font-semibold py-2'>{pageData.title}</div>
            {pageData.content}
        </div>
    )
}

export default ContentPage;