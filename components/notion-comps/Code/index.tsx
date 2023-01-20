import { highlight, languages } from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const NotionCode = ({
    blockValue
}: any) => {
    const content = blockValue.properties.title[0][0];
    const language = blockValue.properties.language[0][0]
    const languageL = language.toLowerCase();
    const prismLanguage = languages[languageL] || languages.javascript;
    const langClass = `language-${language.toLowerCase()}`;
    
    return (
        <pre className={`notion-code ${langClass}`}>
            <code
                className={langClass}
                dangerouslySetInnerHTML={{
                __html: highlight(content, prismLanguage, language)
                }}
            />
        </pre>
    )
}

export default NotionCode