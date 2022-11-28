import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

export default function Footer() {
    const iconSize = '1.2em'
    return (
        <footer className={styles.footer}>
            <p><small>© 2022 Marcel Schmitt. All rights reserved.</small></p>
            <div className={styles.social}>
                <a href="https://medium.com/@schmittmarcel" target="_blank" rel='noreferrer'><FaMedium size={iconSize} /></a>
                <a href="https://github.com/mschmittdev" target="_blank" rel='noreferrer'><FaGithub size={iconSize} /></a>
                <a href="https://www.linkedin.com/in/marcel-schmitt-364539196/" target="_blank" rel='noreferrer'><FaLinkedin size={iconSize} /></a>
            </div>
        </footer>
    )
}