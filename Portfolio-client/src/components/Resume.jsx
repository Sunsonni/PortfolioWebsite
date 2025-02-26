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
        <button  className='downloadButton' onClick={onButtonClick}>Download resume here</button>
        <div className='resume-container'>
            <embed src={pdfUrl} width="80%" align="middle" height="600px" type="application/pdf" />
        </div>
        </>
    );
}

export default Resume;