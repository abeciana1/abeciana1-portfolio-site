import Head from 'next/head'
import { NextSeo } from 'next-seo';

interface SeoI {
    title: string;
    description: string;
}

const CustomHead = ({
    title,
    description
}: SeoI) => {

    return (
        <NextSeo
            title={title}
            titleTemplate='Alex Beciana | %s'
            description={description}
        />
    )
}

export default CustomHead