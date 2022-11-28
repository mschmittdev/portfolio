import Image from "next/image";
import Link from "next/link";
import { ArticlePreview } from "../../types";
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    article: ArticlePreview
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link href={`/articles/${article.slug}`} className={styles.article}>
            <div className={styles.img}>
                <Image src={article.img} alt={article.title} width={400} height={200} />
            </div>
            <div className={styles.content}>
                <div>
                    <h3>{article.title}</h3>
                    <small>{article.subtitle}</small>
                </div>
                <small>{article.createdAt}</small>
            </div>
        </Link>
    )
}