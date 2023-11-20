import React, { Fragment, useState } from 'react'
import cx from 'classnames'
import { IServiceIcon } from '@/interfaces'

export const ServiceIcon = ({
    text,
    color,
    icon
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
                        strokeWidth="2.5"
                        className={cx('h-12 w-12', {
                            ['fill-blue-800 opacity-100']: color === 'blue'
                        })}
                    />
                </div>

                <div>
                    {text}
                </div>
            </div>
        </Fragment>
    )
}