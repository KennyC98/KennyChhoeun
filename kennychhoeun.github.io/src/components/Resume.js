import pdfResume from '../files/KennyChhoeunResume.pdf'

const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
            <embed src={pdfResume} width="800px" height="900" />
        </div>
    )
}

export default Resume
