import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home')
    }
    return (
        <Navbar bg="light" expand="md">
            <Container className=''>
                <Navbar.Brand style={{cursor:'pointer'}}  className='fw-bold text-warning fs-4 ' onClick={navigateHome}>Quiz Spot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link >
                            <Link to='/home' className='text-decoration-none'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/statistics' className='text-decoration-none'>Statistics</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='/blog' className='text-decoration-none'>Blog</Link>
                        </Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;