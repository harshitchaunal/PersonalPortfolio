import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header = () => {
    const [activeLink, setActiveLink] = useState("#about");

    const handleSetActive = (section) => {
        setActiveLink(section);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.navLinks}>
                    <li>
                        <a
                            href="#about"
                            className={
                                activeLink === "#about"
                                    ? styles.active
                                    : styles.inactiveMainLink
                            }
                            onClick={() => handleSetActive("#about")}
                        >
                            harshit chaunal
                        </a>
                    </li>
                    <li>
                        <a
                            href="#project"
                            className={activeLink === "#project" ? styles.active : ""}
                            onClick={() => handleSetActive("#project")}
                        >
                            projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            className={activeLink === "#education" ? styles.active : ""}
                            onClick={() => handleSetActive("#education")}
                        >
                            education
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className={activeLink === "#experience" ? styles.active : ""}
                            onClick={() => handleSetActive("#experience")}
                        >
                            experience
                        </a>
                    </li>
                </ul>
                <ul className={styles.navIcons}>
                    <li>
                        <a href="https://github.com/harshitchaunal" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/harshitchaunal/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="mailto: harshitchaunal123@gmail.com">
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
