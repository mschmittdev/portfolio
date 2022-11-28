import ArticleCard from "../components/ArticleCard/ArticleCard";
import Layout from "../components/Layout/Layout";
import { getSortedArticlesPreviewData } from '../lib/articles';
import styles from '../styles/Articles.module.css';
import { ArticlePreview } from "../types";

interface ArticlesProps {
    articles: ArticlePreview[]
}

export default function Articles({ articles }: ArticlesProps) {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Articles</h1>
                <ul className={styles.articles}>
                    {articles.map((article) => {
                        return <li key={article.slug}><ArticleCard article={article} /></li>
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const articles = getSortedArticlesPreviewData()

    return {
        props: {
            articles
        }
    }
}