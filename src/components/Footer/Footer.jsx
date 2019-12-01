import React from 'react';

import './Footer.scss';

const Footer = (props) => {
    return (
        <footer id="footer">
            <a href="https://github.com/zlatkovtv/konstantin-zlatkov-portfolio" target="_blank" rel="noopener noreferrer">
                <div className="footer-text">Designed and built with React</div>
                <div className="footer-text">by Konstantin Zlatkov</div>
            </a>
        </footer>
    );
};

export default Footer;