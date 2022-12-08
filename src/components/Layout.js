import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css';


function Layout() {
    return (
        <div>
        <Navbar className="NavBar">
            <Nav>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/'><strong>HOME</strong></Link></Nav.Link>
                <div className='project-links'>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Chomp'><strong>CHOMP</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Responsive'><strong>RESPONSIVE</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Iterative'><strong>ITERATIVE</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/Development'><strong>DEVELOPMENT</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/'><strong>WOORDWORKS</strong></Link></Nav.Link>
                <Nav.Link className="NavText" as={'div'}><Link style={{color: 'white', textDecoration: 'none'}} to='/'><strong>WRITING</strong></Link></Nav.Link>
                </div>
            </Nav>
        </Navbar>
        <Outlet/>
        </div>
        );
    }
    
    export default Layout;