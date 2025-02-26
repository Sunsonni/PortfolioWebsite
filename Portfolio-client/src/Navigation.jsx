import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { Link, useLocation } from 'react-router-dom'
  import Footer from './Footer';
  import './App.css'



  const Navigation = () => {
    const location = useLocation();
    return (
       <>
       <Navbar light expand='md' className='fixed-top nav-bar ' id='navbar-margin'>
            <NavbarBrand href='/'>
                <h1 className='title'>Sonnie Nguyen</h1>
            </NavbarBrand>
            <Nav className='' navbar>
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
       <div className="rounded-line"></div>
       </Navbar>
       <Footer className='fixed-bottom nav-bar'/>
       </>
    );
  }

export default Navigation;