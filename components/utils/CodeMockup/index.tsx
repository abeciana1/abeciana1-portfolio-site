import React from 'react'
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
        <pre data-prefix={prefix} className={cx("flex", {
            ["text-black"]: textColor === "black",
            ["text-white"]: textColor === "white",
            ["bg-altYellow text-black"]: backgroundColor === "warning",
            ["text-green-400"]: textColor === "success",
            ["text-altYellow"]: textColor === "warning"
        })}>
            <code className="whitespace-normal">
                {text}
            </code>
        </pre>
    )
}

interface CodeMockupI {
    children: React.ReactNode;
    enableSection: boolean;
    background: string;
}

// w-6/7 lg:w-3/4 max-w-2xl

export const CodeMockup = (
    { children, enableSection, background }: CodeMockupI
) => {
    return (
        <section tabIndex={0} className="my-10 relative">
            <div className={cx("mx-auto",{
                ["mockup-code-section"]: enableSection,
                ["bg-black text-white"]: background === "black",
                ["bg-gray-200 text-black"]: background === "gray"
            })}>
                {children}
            </div>
        </section>
    )
}