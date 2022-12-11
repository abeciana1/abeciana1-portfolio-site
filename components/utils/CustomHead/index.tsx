import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface SeoI {
    title?: string;
    description: string;
}

export const CustomHead = ({
    title,
    description
}: SeoI) => {

    return (
        <NextSeo
            title={title}
            titleTemplate='Alex Beciana | %s'
            defaultTitle='Alex Beciana'
            description={description}
            // canonical={}
        />
    )
}

interface TagI {
    [index: number]: string[];
}

interface BlogPostSeoI {
    title?: string;
    description: string;
    article: ArticleI
}

interface ArticleI {
    publishedTime: string;
    modifiedTime: string;
    blogTags: TagI | any;
}

export const BlogPostHead = ({
    title,
    description,
    article
}: BlogPostSeoI) => {

    // const router = useRouter()

    const {
        publishedTime,
        modifiedTime,
        blogTags
    } = article

    return (
        <NextSeo
            title={title}
            titleTemplate='Alex Beciana | %s'
            defaultTitle='Alex Beciana'
            description={description}
            openGraph={{
                title: title,
                description: description,
                url: '',
                type: 'article',
                article: {
                    publishedTime: publishedTime,
                    modifiedTime: modifiedTime,
                    tags: blogTags
                }
            }}
        />
    )
}