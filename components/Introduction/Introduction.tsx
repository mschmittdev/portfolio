import Image from "next/image";
import styles from "./Introduction.module.css"

export default function Introduction() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <p className={styles.hello}>HELLO!</p>
                <h1>I Am Marcel Schmitt</h1>
                <p className={styles.description}>I&apos;m a full-stack developer specializing in the JavaScript ecosystem. My main tools are the MERN stack and Nextjs.</p>
                <div className={styles.buttons}>
                    <a className={styles['projects-btn']} href="#projects">View projects</a>
                    <a className={styles['cv-btn']} target="_blank" href="/resume.pdf">Download CV</a>
                </div>
            </div>
            <div>
                <Image src="/ReadyPlayerMe-Avatar.png" alt="Avatar of myself made by Ready Player Me" width={500} height={500} />
            </div>
        </section>
    )
}