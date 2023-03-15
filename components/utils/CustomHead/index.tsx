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

    const router = useRouter()

    return (
        <NextSeo
            title={title}
            titleTemplate='Alex Beciana | %s'
            defaultTitle='Alex Beciana'
            description={description}
            canonical={"https://alexbeciana.com" + router.asPath}
        />
    )
}

interface TagI {
    [index: number]: string[];
}

interface BlogPostSeoI {
    title?: string;
    description: string;
    article: ArticleI;
    image: string;
}

interface ArticleI {
    publishedTime?: string;
    modifiedTime?: string;
    blogTags: TagI | any;
}

export const BlogPostHead = ({
    title,
    description,
    article,
    image
}: BlogPostSeoI) => {

    const router = useRouter()

    return (
        <NextSeo
            title={title}
            titleTemplate='Alex Beciana | %s'
            defaultTitle='Alex Beciana'
            description={description}
            canonical={"https://alexbeciana.com" + router.asPath}
            openGraph={{
                title: title,
                description: description,
                url: "https://alexbeciana.com" + router.asPath,
                type: 'article',
                article: article,
                images: [
                {
                    url: image,
                    width: 850,
                    height: 650,
                    alt: `Alex Beciana | ${title}`,
                },
                ],
            }}
        />
    )
}