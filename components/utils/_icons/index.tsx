import React, { Fragment, useState } from 'react'
import cx from 'classnames'
import { IServiceIcon } from '@/interfaces'

export const ServiceIcon = ({
    text,
    color,
    icon,
    title
}: IServiceIcon) => {
    const Icon = icon as React.ElementType
    const [hovered, setHovered] = useState(false)

    return (
        <Fragment>
            <div
                className="flex flex-row gap-10"
            >
                <div className="max-h-12">
                    <Icon
                        strokeWidth={1}
                        className={cx('h-12 w-12', {
                            ['stroke-white fill-blue-800 opacity-100']: color === 'blue',
                            ['stroke-white fill-altRed opacity-100']: color === 'red',
                            ['stroke-white fill-altYellow opacity-100']: color === 'yellow',
                            ['stroke-white fill-orange-400 opacity-100']: color === 'orange',
                        })}
                    />
                </div>
                <div>
                    <span className='font-semiBold mr-1'>{title}.</span>
                    {text}
                </div>
            </div>
        </Fragment>
    )
}