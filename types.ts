export type Article = {
    slug: string;
    title: string;
    subtitle: string;
    img: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}

export type ArticlePreview = Omit<Article, 'body'>

export type Project = {
    name: string;
    url: string;
    img: string;
    description: string;
    stack: string[];
}