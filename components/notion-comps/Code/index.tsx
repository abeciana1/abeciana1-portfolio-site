import { useEffect, useMemo } from 'react'
import { languages, highlightAll } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// require('prismjs/components/index')

const NotionCode = ({
    blockValue
}: any) => {
    const content = blockValue.properties.title[0][0];
    const language = blockValue.properties.language[0][0]
    const langClass = `language-${language.toLowerCase()}`;

    const languageFormatted = () => {
        let lang = language.split(' ')
        let formattedLang = lang[0].toLowerCase()
        if (formattedLang !== 'plain' || formattedLang !== undefined) {
            return require(`prismjs/components/prism-${languageFormatted}`)
        }
    }


    useEffect(() => {
        highlightAll()
    }, [])

    return (
        <pre className={`notion-code ${langClass}`}>
            <code className={langClass}>
                {content}
            </code>
        </pre>
    )
}

export default NotionCode