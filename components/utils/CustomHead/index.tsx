import Head from 'next/head'

const CustomHead = (props: any) => {

    const {
        title,
        description
    } = props

    return (
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ description } />
        </Head>
    )
}

export default CustomHead