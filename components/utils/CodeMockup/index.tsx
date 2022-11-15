import cx from 'classnames'

interface CodeLineI {
    text: string;
    prefix: string;
    textColor?: string;
    backgroundColor?: string;
}

export const CodeMockupLine = ({
    text,
    prefix,
    textColor,
    backgroundColor
}: CodeLineI) => {
    return (
        <pre data-prefix={prefix} className={cx({
            ["text-black"]: textColor === "black",
            ["text-white"]: textColor === "white",
            ["bg-altYellow text-black"]: backgroundColor === "warning",
            ["text-green-400"]: textColor === "success",
            ["text-altYellow"]: textColor === "warning"
        })}>
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
        <section className="">
            <div className={cx("",{
                ["mockup-code-section"]: enableSection,
                ["bg-black text-white"]: background === "black",
                ["bg-gray-200 text-black"]: background === "gray"
            })}>
                {children}
            </div>
        </section>
    )
}