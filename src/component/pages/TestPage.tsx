import React from 'react'
import { useParams } from 'react-router-dom';

function TestPage({ }) {
    const { id } = useParams();

    return (
        <div>TestPage {id}</div>
    )
}

export default TestPage;