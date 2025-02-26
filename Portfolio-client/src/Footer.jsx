import React from 'react';
import './App.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <p>@ 2025 Sonnie M. Nguyen -  St. Louis, MO </p>
                <a className='link' id='email-button' href='mailto:sonniemnguyen@gmail.com'>Email Me</a>
                <a href='https://www.linkedin.com/in/sonnie-nguyen/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                <a href='https://github.com/Sunsonni' target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
        </footer>
    );
}

export default Footer;