import { useEffect, useMemo } from 'react'
import { highlightAll } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const NotionCode = ({
    language,
    content
}: any) => {

    const languageFormatted = () => {
        let lang = language.split('-')
        let formattedLang = lang[1].toLowerCase()
        if (formattedLang !== 'plain' || formattedLang !== undefined) {
            return require(`prismjs/components/prism-${languageFormatted}`)
        }
    }


    useEffect(() => {
        highlightAll()
    }, [])

    return (
        <pre className={`notion-code ${language}`}>
            <code className={language}>
                {content}
            </code>
        </pre>
    )
}

export default NotionCode