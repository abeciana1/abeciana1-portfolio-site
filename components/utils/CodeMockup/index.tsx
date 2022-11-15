import cx from 'classnames'

interface CodeLineI {
    text: string;
    prefix: string;
}

export const CodeMockupLine = ({
    text,
    prefix
}: CodeLineI) => {
    return (
        <pre data-prefix={prefix}>
            <code>
                {text}
            </code>
        </pre>
    )
}

interface CodeMockupI {
    children: any;
    enableSection: boolean;
    background: string;
}

export const CodeMockup = (
    { children, enableSection, background }: CodeMockupI
) => {
    return (
        <section className="z-50">
            <div className={cx("z-50",{
                ["mockup-code-section"]: enableSection,
                ["bg-black text-white"]: background === "black",
                ["bg-gray-200 text-black"]: background === "gray"
            })}>
                {children}
            </div>
        </section>
    )
}