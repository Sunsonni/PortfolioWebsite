import React from 'react'
import '../App.css'

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = 'Resume 2025 - Sonnie Nguyen.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Resume 2025 - Sonnie Nguyen.pdf";
        document.body.appendChild(link);
        link.click();
        document.doctype.removeChild(link);
    }
    return (
        <>
        <h3>Click below to download resume</h3>
        <button onClick={onButtonClick}>Download resume here</button>
        </>
    );
}

export default Resume;