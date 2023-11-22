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
        <div
            key={id}
            className={cx("py-0.5 font-medium px-2 rounded-md text-md my-0.5",{
                [addClass]: addClass,
                ['text-white bg-yellow-700 bg-opacity-60']: color === "brown",
                ['text-black bg-orange-400 bg-opacity-60']: color === 'orange',
                ['text-black bg-pink-300']: color === 'pink',
                ['text-black bg-purple-300']: color === 'purple',
                ['text-black bg-yellow-200']: color === 'yellow',
                ['text-black bg-blue-300']: color === 'blue',
                ['text-black bg-gray-200']: color === 'gray',
                ['text-black bg-green-400']: color === 'green',
                ['text-white bg-red-400']: color === 'red',
                ['text-white bg-blue-800']: color === 'default'
            })}
        >{tagName}</div>
    )
}