import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
  } from 'reactstrap';
  import { useState } from 'react'
  import { Link, useLocation } from 'react-router-dom'
  import './App.css'



  const Navigation = () => {
    const location = useLocation();
    const [isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
       <>
       <Navbar light expand='md' className='fixed-top nav-bar ps-4' id='navbar-margin'>
            <NavbarBrand href='/'>
                <h1 className='title'>Sonnie Nguyen</h1>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen}  className='navbar-collapse' navbar>
            <Nav className='ms-auto pe-4' navbar>
                <NavItem>
                    <Link to='/About' className='nav-link'
                    aria-current={location.pathname ==='/About' ? 'page': undefined}
                    >About</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Projects' className='nav-link'
                    aria-current={location.pathname === '/Projects' ? 'page' : undefined}
                    >Projects</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Resume' className='nav-link'
                    aria-current={location.pathname === '/Resume' ? 'page' : undefined}
                    >Resume</Link>
                </NavItem>
            </Nav>
            </Collapse>
       </Navbar>
       <div className="rounded-line"></div>
       </>
    );
  }

export default Navigation;