import React from 'react';
import githubLogo from '../../assets/pics/github.png';
import linkedinLogo from '../../assets/pics/linkedin.png';

function Footer() {
    return(
        <footer className="footer">
                <img src={githubLogo} className='logo' alt='Github Logo' />
                <a href='https://github.com/Tdegirol' className='footer-links'>  Tdegirol</a>
                <img src={linkedinLogo} className='logo' alt='Linkedin Logo' />
                <a href='https://www.linkedin.com/in/thomas-degirolamo-455796102/' className='footer-links'>  TJ DeGirolamo LinkedIn</a>
        </footer>
    )
}

export default Footer;