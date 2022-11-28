import Link from 'next/link'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import Introduction from '../components/Introduction/Introduction'
import Layout from '../components/Layout/Layout'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { getSortedArticlesPreviewData } from '../lib/articles'
import styles from '../styles/Home.module.css'
import { ArticlePreview, Project } from '../types'

interface HomeProps {
  articles: ArticlePreview[]
  projects: Project[]
}

export default function Home({ articles, projects }: HomeProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <Introduction />

        <section id='articles'>
          <h2>Recent articles</h2>
          <div className={styles.articles}>
            {articles.map((article) => {
              return <ArticleCard article={article} key={article.slug} />
            })}
          </div>
          <div className={styles['articles-link']}>
            <Link href="/articles">See all articles</Link>
          </div>
        </section>

        <section id='projects'>
          <h2>Projects</h2>
          <div className={styles.projects}>
            {projects.map((project, index) => {
              return <ProjectCard project={project} key={index} />
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = require('../data/projects.json')
  const articles = getSortedArticlesPreviewData().slice(0, 4)

  return {
    props: {
      articles,
      projects
    }
  }
}
