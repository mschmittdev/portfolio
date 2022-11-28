import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types";
import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={project.url} target="_blank" className={styles.project}>
            <div className={styles.img}>
                <Image src={`/img/projects/${project.img}`} alt={project.name} width={400} height={200} />
            </div>
            <div className={styles.content}>
                <div>
                    <h3>{project.name}</h3>
                    <small>{project.description}</small>
                </div>
                <div className={styles['stack-list']}>
                    {project.stack.map((stack, index) => {
                        return <span key={index} className={styles['stack-banner']}><small>{stack}</small></span>
                    })}
                </div>

            </div>
        </Link>
    )
}