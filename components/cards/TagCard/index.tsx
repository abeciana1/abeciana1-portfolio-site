import React from 'react'
import cx from 'classnames'
import { ITag } from '@/interfaces'

export const TagCard = ({
    id = "",
    color,
    tagName,
    addClass = ""
}: ITag) => {
    return (
        <span
            key={id}
            className={cx("my-1 font-medium px-2 rounded-md",{
                [addClass]: addClass,
                ['text-white bg-yellow-700 bg-opacity-60']: color === "brown",
                ['text-white bg-orange-400 bg-opacity-60']: color === 'orange',
                ['text-white bg-pink-300']: color === 'pink',
                ['text-white bg-purple-300']: color === 'purple',
                ['text-black bg-yellow-200']: color === 'yellow',
                ['text-white bg-blue-300']: color === 'blue',
                ['text-black bg-gray-200']: color === 'gray',
                ['text-black bg-green-400']: color === 'green',
                ['text-white bg-red-400']: color === 'red',
                ['text-white bg-blue-800']: color === 'default'
            })}
        >{tagName}</span>
    )
}