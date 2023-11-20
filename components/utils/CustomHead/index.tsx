import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
    ISeo,
    IBlogPostSeo
} from '@/interfaces'

export const CustomHead = ({
    title,
    description,
    image
}: ISeo) => {

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
                        url: image ? image : '',
                        width: 400,
                        height: 413,
                        alt: 'Photo of text',
                    }
                ]
            }}
        />
    )
}

export const BlogPostHead = ({
    title,
    description,
    article,
    image
}: IBlogPostSeo) => {

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