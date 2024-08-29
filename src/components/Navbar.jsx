import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveLink();
    };

    const updateActiveLink = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const { offsetTop, offsetHeight } = section;
        if (
          window.scrollY >= offsetTop - 50 &&
          window.scrollY < offsetTop + offsetHeight - 50
        ) {
          currentSectionId = `#${section.getAttribute("id")}`;
        }
      });

      if (currentSectionId && activeLink !== currentSectionId) {
        setActiveLink(currentSectionId);
        window.history.replaceState(null, null, currentSectionId); // Update URL without scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top on load
  }, []);

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);

    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, link); // Update URL
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img src="/logo-0-nn-2@2x.png" alt="Logo" />
        <span>Smartgram</span>
        <div className="comment-box">👋 Hello 👋</div>
      </div>
      <ul className="navbar-menu">
        <li className="nav-item">
          <a
            href="#home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={(event) => handleLinkClick(event, "#home")}
          >
            Trang Chủ
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#features"
            className={activeLink === "#features" ? "active" : ""}
            onClick={(event) => handleLinkClick(event, "#features")}
          >
            Tính năng
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#feedback"
            className={activeLink === "#feedback" ? "active" : ""}
            onClick={(event) => handleLinkClick(event, "#feedback")}
          >
            Góp Ý
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#info"
            className={activeLink === "#info" ? "active" : ""}
            onClick={(event) => handleLinkClick(event, "#info")}
          >
            Thông Tin
          </a>
        </li>
        <li className="nav-item">
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
