import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout/Layout";
import { getAllArticleSlugs, getArticleData } from "../../lib/articles";
import { Article } from "../../types";
import styles from '../../styles/ArticleDetails.module.css';
import Image from "next/image";

interface ArticleProps {
    article: Article
}

export default function ArticleDetails({ article }: ArticleProps) {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{article.title}</h2>
                <p>{article.subtitle}</p>
                <div className={styles['img-container']}>
                    <Image src={article.img} alt={article.title} fill />
                </div>
                <div className={styles.body} dangerouslySetInnerHTML={{ __html: article.body }} />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string
    const article = await getArticleData(slug)

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = getAllArticleSlugs()
    const paths = slugs.map((slug) => {
        return {
            params: {
                slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}