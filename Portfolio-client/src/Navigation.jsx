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
  import logo from './assets/react.svg';

  const Navigation = () => {
    return (
       <>
       <Navbar light expand='md' className='fixed-top' id='navbar-margin'>
            <NavbarBrand href='/'>
                <img src={logo}/>
            </NavbarBrand>
            <Nav className='me-auto' navbar>
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
       </Navbar>
       </>
    );
  }

export default Navigation;