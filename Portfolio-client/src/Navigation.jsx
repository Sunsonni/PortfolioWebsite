import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom'
  import './App.css'
  import Email from './components/email';

  const Navigation = () => {
    return (
       <>
       <Navbar light expand='md' className='fixed-top nav-bar ' id='navbar-margin'>
            <NavbarBrand href='/'>
                <h1 className='title'>Sonnie Nguyen</h1>
            </NavbarBrand>
            <Nav className='mx-auto' navbar>
                <NavItem>
                    <Link to='/' className='nav-link'>About</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Work' className='nav-link'>Work</Link>
                </NavItem>
                <NavItem>
                    <Link to='/Resume' className='nav-link'>Resume</Link>
                </NavItem>
            </Nav>
            <Email />
       </Navbar>
       <div className="rounded-line"></div>
       </>
    );
  }

export default Navigation;