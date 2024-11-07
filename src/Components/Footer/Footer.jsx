import React from 'react';
import './Footer.css';
import logo from '../../assets/swiggy-white.png';

const Footer = () => {
    return (
        <footer className="footer bg-black text-white text-center text-lg-start sticky-footer">
            <div className="footer-content">
                <img src={logo} alt="Swiggy Logo" className="footer-logo" />
                <div className="text-center p-3">
                    © 2024 Swiggy Pvt Ltd
                </div>
            </div>
        </footer>
    );
};

export default Footer;
