import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogoClick = () => {
        window.location.reload();
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo" onClick={handleLogoClick}>
                <img src="/logo-0-nn-2@2x.png" alt="Logo" />
                <span>Smartgram</span>
                <div className="comment-box">👋 Hello 👋</div>
            </div>
            <ul className="navbar-menu">
                <li>
                    <a
                        href="#home"
                        className={activeLink === '#home' ? 'active' : ''}
                        onClick={() => handleLinkClick('#home')}
                    >
                        Trang Chủ
                    </a>
                </li>
                <li>
                    <a
                        href="#features"
                        className={activeLink === '#features' ? 'active' : ''}
                        onClick={() => handleLinkClick('#features')}
                    >
                        Tính năng
                    </a>
                </li>
                <li>
                    <a
                        href="#feedback"
                        className={activeLink === '#feedback' ? 'active' : ''}
                        onClick={() => handleLinkClick('#feedback')}
                    >
                        Góp Ý
                    </a>
                </li>
                <li>
                    <a
                        href="#info"
                        className={activeLink === '#info' ? 'active' : ''}
                        onClick={() => handleLinkClick('#info')}
                    >
                        Thông Tin
                    </a>
                </li>
                <li>
                    <a
                        href="https://imaginative-mosquito-tienphat-e05715c6.koyeb.app/"
                        className="login-button"
                    >
                        log in
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
