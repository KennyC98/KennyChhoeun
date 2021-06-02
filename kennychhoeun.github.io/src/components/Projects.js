import { Card, CardColumns, Button } from 'react-bootstrap'

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1><br></br>
            <CardColumns>
            <Card>
                <Card.Img variant="top" src="https://icon-library.com/images/youtube-small-icon/youtube-small-icon-23.jpg" />
                <Card.Body>
                    <Card.Title>Lets Watch Together</Card.Title>
                    <Card.Text>
                        <p className="card-text">Created a website where multiple users can watch YouTube videos together in sync
                        with seperate rooms and chat.
                        <br></br>Technologies Used Include: Socket.io, HTML, CSS, JS 
                        <br></br>Hosted on Heroku</p>
                    </Card.Text>
                    <Button variant="primary" href="https://letswatchtogether.herokuapp.com/">Go to site</Button>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Img variant="top" src="https://www.iconpacks.net/icons/2/free-plant-icon-1573-thumb.png" />
                <Card.Body>
                    <Card.Title>L.A. Carnivores Ecommerce Site</Card.Title>
                    <Card.Text>
                    <p className="card-text">I developed the backend for the L.A Carnivores website which focuses on the sale of carnivorous
                        plants along side with a friend.
                        <br></br><br></br>Main Contributions: Backend Work with Node.js, Stripe API for orders/products, Payment System
                        <br></br>Other Contributions: React front end work</p>
                    </Card.Text>
                    <Button variant="primary" href="https://www.lacarnivores.com">LA Carnivores Site</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/inventory-2072276-1751587.png" />
                <Card.Body>
                    <Card.Title>Inventory Management System</Card.Title>
                    <Card.Text>
                    <p className="card-text">For Object Oriented class, my team created a inventory mangement system that was implemented 
                        with Java with a intuitive UI and had a database with MySQL.</p>
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/KennyChhoeun/inventory_subsystem">GitHub Repository</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://static.thenounproject.com/png/3190581-200.png" />
                <Card.Body>
                    <Card.Title>Psychiatry Application Backend</Card.Title>
                    <Card.Text>
                    <p className="card-text">With a team of 4. I helped create the backend server for a physchiatrist application for CS 4800 (Software Engineering) which included the Authentication Service and using Node.js
                        creating an API along with backend testing using mocha all under the Google Firebase platform.</p>
                    </Card.Text>
                    <Button variant="primary" href="https://github.com/Inh3ritance/CS-4800-Server-Psychiatry-App">Github Repo</Button>
                </Card.Body>
            </Card>
            </CardColumns>
        </div>
    )
}

export default Projects