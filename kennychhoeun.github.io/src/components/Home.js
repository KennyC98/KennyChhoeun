import { Button, ProgressBar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <br></br>
            <h4>Welcome! Please feel free to read about my projects and be sure to check out my resume. Thank you!</h4>
            <Image src="https://retailx.com/wp-content/uploads/2019/12/iStock-476085198-300x300.jpg" roundedCircle/>

            <h5>About</h5>
            <p>Hi, I'm Kenny. I am a Cal Poly Pomona C/O 2021 graduate.<br></br>
                I particularly enjoy working on a variety of projects that focus on web development and software development.<br></br>
                I have had experience in topics of mySQL/noSQL, Java Software Development, Backend and Front End Work (Node.js, MySQL, React), & Firebase.</p>


            <h5>Skills</h5>
            <div>
                <p>Java Programming/OOP 4/5
                <ProgressBar animated now={80} /></p>
                <p>MySQL 3/5
                <ProgressBar animated now={60} /></p>
                <p>Node.js 3/5
                <ProgressBar animated now={60} /></p>
                <p>React.js 2/5
                <ProgressBar animated now={40} /></p>
                <p>HTML/CSS/JS 3/5
                <ProgressBar animated now={60} /></p>
                <br></br>
            </div>
            <Button><Link to="/Resume" id='learnmore'>Learn More</Link></Button>
            <br></br><br></br><br></br><footer>Last Updated 6.2.2021</footer>
        </div>
    )
}

export default Home
