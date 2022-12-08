import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css';


function Layout() {
    return (
        <div>
        <Navbar className="NavBar">
            <Nav>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/'><strong>HOME</strong></Link></Nav.Link>
                <div className='project-links'>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/Chomp'><strong>CHOMP</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/Responsive'><strong>RESPONSIVE</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/Iterative'><strong>ITERATIVE</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/Development'><strong>DEVELOPMENT</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/'><strong>WOORDWORKS</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Portfolio/'><strong>WRITING</strong></Link></Nav.Link>
                </div>
            </Nav>
        </Navbar>
        <Outlet/>
        </div>
        );
    }
    
    export default Layout;
