import React from 'react'
import cx from 'classnames'

export interface TagI {
    id?: string;
    color: string;
    name: string;
    addClass?: string;
}

export const TagCard = ({
    id = "",
    color,
    name,
    addClass = ""
}: TagI) => {
    return (
        <span
            key={id}
            className={cx({
                [addClass]: addClass,
                ['text-white bg-yellow-700 bg-opacity-60']: color === "brown",
                ['text-white bg-orange-400	 bg-opacity-60']: color === 'orange',
                ['text-white bg-pink-300']: color === 'pink',
                ['text-white bg-purple-300']: color === 'purple',
                ['text-black bg-yellow-200']: color === 'yellow',
                ['text-white bg-blue-300']: color === 'blue',
                ['text-black bg-gray-200']: color === 'gray',
                ['text-white bg-green-400']: color === 'green',
                ['text-white bg-red-400']: color === 'red',
                ['text-white bg-blue-800']: color === 'default'
            })}
        >{name}</span>
    )
}