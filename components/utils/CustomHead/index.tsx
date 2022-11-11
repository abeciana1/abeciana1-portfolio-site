import { NextSeo } from 'next-seo'
// import { useRouter } from 'next/router'

interface SeoI {
    title?: string;
    description: string;
}

const CustomHead = ({
    title,
    description
}: SeoI) => {

    // const router = useRouter()
    // console.log(router);

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