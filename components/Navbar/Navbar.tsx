import Link from "next/link";
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <nav className={styles.links}>
                <div>
                    <Link href="/">Marcel</Link>
                </div>
                <div>
                    <Link href="/articles">Articles</Link>
                </div>
            </nav>
        </div>
    )
}
