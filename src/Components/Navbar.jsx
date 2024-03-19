import React, {useState, useEffect} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import * as Icons from "react-icons/fa"
import { Navbar, Nav } from 'rsuite';
import 'rsuite/Navbar/styles/index.css';
import 'rsuite/Nav/styles/index.css';


function NavbarTop() {
    const [dropdown, setDropdown] = useState(false);
    const [pages, setPages] = useState([]);
  return (
    <>
        <Navbar>
            <Nav>
                <Nav.Item>
                    <Link to="/" className="navbar-logo">
                        CS415
                        <Icons.FaServer />
                    </Link>
                </Nav.Item>
                <Nav.Item><Link to="/" className="navbar-item">Home</Link></Nav.Item>
                <Nav.Item><Link to="/login" className="navbar-item">Login</Link></Nav.Item>
                <Nav.Item><Link to="/userprofile" className="navbar-item">User Profile</Link></Nav.Item>
                <Nav.Item><Link to="/characters" className="navbar-item">Characters</Link></Nav.Item>
                <Nav.Menu title="Resources" className="navbar-item">
                     <Nav.Item><Link to='/classes' className="navbar-menu">Classes</Link></Nav.Item>
                     <Nav.Item><Link to='/races' className="navbar-menu">Races</Link></Nav.Item>
                     <Nav.Item><Link to='/skills' className="navbar-menu">Skills</Link></Nav.Item>
                </Nav.Menu>
                </Nav>
                <Nav pullRight>
                <Nav.Item><Link to="/register"><button className="btn">Register</button></Link></Nav.Item>
            </Nav>
        </Navbar>

    </>
  )
}

export default NavbarTop

