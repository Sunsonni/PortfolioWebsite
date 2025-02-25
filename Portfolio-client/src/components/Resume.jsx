import React from 'react'
import '../App.css'

const Resume = () => {
    const pdfUrl = 'Resume 2025 - Sonnie Nguyen.pdf';
    const onButtonClick = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Resume 2025 - Sonnie Nguyen.pdf";
        document.body.appendChild(link);
        link.click();
        document.doctype.removeChild(link);
    }
    return (
        <>
        <embed src={pdfUrl} width="80%" margin="0 auto" height="600px" type="application/pdf" />
        <h3>Click below to download resume</h3>
        <button onClick={onButtonClick}>Download resume here</button>
        </>
    );
}

export default Resume;