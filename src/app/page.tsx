'use client';
import Style from '@styles/Page.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Home() {
    const [expanding, setExpanding] = useState(false);
    const router = useRouter();
    const handleNavigation = () => {
        router.push('/youtube');
    };
    const handleClick = () => {
        setExpanding(!expanding);
    };
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={Style.container}>
                <h1
                    className={clsx(Style.title, {
                        [Style.active]: expanding,
                    })}
                    onClick={handleClick}
                >
                    hello
                </h1>
            </div>
            <ul>
                <li>
                    <Link href="/facebook">Facebook</Link>
                </li>
                <li
                    onClick={() => {
                        handleNavigation();
                    }}
                >
                    Youtube
                </li>
            </ul>
        </div>
    );
}
