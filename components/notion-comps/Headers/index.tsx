import React from 'react'

const textDecorator = (decorator: string | undefined, children: React.ReactNode) => {

    switch (decorator) {
        case 'b':
            return (
                <b>{ children }</b>
            )
        case 'c':
            return (
                <code className="notion-inline-code font-bold">
                    { children}
                </code>
            )
        case 'i':
            return (
                <em>{ children }</em>
            )
        case 's':
            return (
                <s>{ children }</s>
            )
        default:
            return children;
    }

}

const findDecoratorAndContent = (block: any) => {
    let decorator = ''

    const content = block.properties.title[0][0]
    if (block.properties.title[0][1]) {
        decorator = block.properties.title[0][1][0][0]
    }
    
    if (!decorator) {
        return ({
            content: content
        })
    } else {
        return ({
            content: content,
            decorator: decorator
        })
    }
}

export const NotionHeader = ({
    blockValue
}: any) => {
    const {
        content,
        decorator
    } = findDecoratorAndContent(blockValue)
    return (
        <h2 className="text-4xl leading-relaxed">
            {textDecorator(decorator, content)}
        </h2>
    )
}

export const NotionSubHeader = ({
    blockValue
}: any) => {
    const {
        content,
        decorator
    } = findDecoratorAndContent(blockValue)
    return (
        <h3 className="text-3xl leading-relaxed">
            {textDecorator(decorator, content)}
        </h3>
    )
}

export const NotionSubSubHeader = ({
    blockValue
}: any) => {
    const {
        content,
        decorator
    } = findDecoratorAndContent(blockValue)

    return (
        <>
            <h4 className="text-2xl leading-relaxed">
                {textDecorator(decorator, content)}
            </h4>
        </>
    )
}