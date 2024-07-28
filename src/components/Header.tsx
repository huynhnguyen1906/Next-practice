'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" href="/">
                            Home
                        </Link>
                        <Link className="nav-link" href="/Blog">
                            Blog
                        </Link>
                        <Link className="nav-link" href="/timer">
                            Timer
                        </Link>
                        <Link className="nav-link" href="/count-down">
                            Count down
                        </Link>
                        <Link className="nav-link" href="/color-picker">
                            Color Picker
                        </Link>
                        <Link className="nav-link" href="/slider">
                            Slider
                        </Link>
                        <Link className="nav-link" href="/thumbnail-slider">
                            Thumbnail Slider
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
