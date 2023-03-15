import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
// import { NewsArticleJsonLd } from 'next-seo';

interface SeoI {
    title?: string;
    description: string;
    image?: any;
}

export const CustomHead = ({
    title,
    description,
    image
}: SeoI) => {

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
                images: [
                    {
                        url: image,
                        width: 400,
                        height: 413,
                        alt: 'Photo of text',
                    }
                ]
            }}
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
        <>
            {/* <NewsArticleJsonLd
                url={"https://alexbeciana.com" + router.asPath}
                title={title || ""}
                description={description}
                section="education"
                keywords={article.blogTags}
                datePublished={article?.publishedTime || ""}
                authorName="Alex Beciana"
                dateCreated={article?.publishedTime || ""}
                publisherName="Alex Beciana"
                publisherLogo="./profile-callout-edited.webp"

            /> */}
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
        </>
    )
}