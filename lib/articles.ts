import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; 
import { remark } from 'remark';
import html from 'remark-html';
import { Article, ArticlePreview } from '../types';

const articlesDirectory = path.join(process.cwd(), 'data', 'articles');

export function getSortedArticlesPreviewData(): ArticlePreview[] {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const articlePreview: ArticlePreview = {
      slug,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      img: `/img/articles/${matterResult.data.img}`,
      createdAt: matterResult.data.createdAt,
      updatedAt: matterResult.data.updatedAt
    }
    // Combine the data with the id
    return articlePreview;
  });

  // Sort articles by date
  return allArticlesData.sort(({ createdAt: a }, { createdAt: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const slugs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    return slug
  });

  return slugs
}

export async function getArticleData(slug: string) {
  const fileName = slug + '.md'
  const file = path.join(articlesDirectory, fileName)
  const fileContents = fs.readFileSync(file, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const article: Article = {
    slug,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    body: contentHtml,
    img: `/img/articles/${matterResult.data.img}`,
    createdAt: matterResult.data.createdAt,
    updatedAt: matterResult.data.updatedAt
  }

  return article
}