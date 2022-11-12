import { NextSeo } from 'next-seo'

interface SeoI {
    title?: string;
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
            defaultTitle='Alex Beciana'
            description={description}
            // canonical={}
        />
    )
}

export default CustomHead