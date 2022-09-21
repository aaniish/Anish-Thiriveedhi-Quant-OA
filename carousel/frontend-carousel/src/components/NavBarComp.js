import React from 'react'
import './NavBarComp.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar} from "react-bootstrap"

const customClass = "myCustomNavLink";

export default function NavBarComp() {
    return (
        /* 
        Nav.Link bsPrefix set to customClass, as initialized above, in order to implement custom styling instead of the given 
        styling from bootstrap. Navbar.Toggle placed in order to implement mobile adaption for navigation. Classname for Nav is 
        set accordingly in order to even spread links across the navbar in the center. 
        */
        <Navbar expand="lg" style={{padding: 50}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="flex-grow-1 justify-content-evenly">
                    <Nav.Item>
                        <Nav.Link href="#home" bsPrefix={customClass}>HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#news" bsPrefix={customClass}>NEWS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact" bsPrefix={customClass}>CONTACT</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
