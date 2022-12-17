import React from 'react'
import cx from 'classnames'

interface BlockI {
    id: string;
    type: string;
}

export const Text = ({ text }: any) => {
    if (!text) {
        return null;
    }
    return text.map((value: any) => {
        const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text,
        } = value;
        return (
        <span
            className={cx({
                ["font-bold"]: bold,
                ["italic"]: italic,
                ["text-altRed bg-gray-200 px-1 font-mono"]: code,
                ["underline"]: underline,
                ["text-black"]: color === "default"
            })}
        >
            {text.link ?
                <a 
                    className="underline text-altBlue underline-offset-2"
                    href={text.link.url}>{text.content}</a>
                :
                text.content}
        </span>
        );
    });
};

// const renderNestedList = (block) => {
//     const { type } = block;
//     const value = block[type];
//     if (!value) return null;

//     const isNumberedList = value.children[0].type === "numbered_list_item";

//     if (isNumberedList) {
//         return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
//     }
//     return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
// };

const renderBlock = (block: any) => {
    const {
        id,
        type
    } = block
    const value = block[type];

    switch (type) {
        case "paragraph":
            return (
                <p>
                    <Text type={type} text={value.rich_text} />
                </p>
            )
        default:
            return null
    }

}

export const NotionBlockRenderer = ({block}: any) => {
    console.log(block);
    return (
        renderBlock(block)
    )
}