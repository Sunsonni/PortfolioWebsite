import '../App.css'

const Resume = () => {
    const pdfUrl = 'Resume - Sonnie Nguyen.pdf';
    const onButtonClick = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume - Sonnie Nguyen.pdf';
        document.body.appendChild(link);
        link.click();
        document.doctype.removeChild(link);
    }

    return (
        <>
        <div className='resume-container'>
            <embed src={pdfUrl} width="80%" height="600px" type="application/pdf" />
        </div>
        <button  className='downloadButton' onClick={onButtonClick}>Download resume here</button>
        </>
    );
}

export default Resume;