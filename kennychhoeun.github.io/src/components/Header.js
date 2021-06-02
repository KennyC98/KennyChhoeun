import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="" id="brand"><Link to="/" id="navlinks">Kenny Chhoeun</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" id="navlinks">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/Projects" id="navlinks">Projects</Link></Nav.Link>
                            <Nav.Link><Link to="/Resume" id="navlinks">Resume</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
