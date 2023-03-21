import React, { Fragment, useState } from 'react'
import cx from 'classnames'

interface IServiceIcon {
    text: string;
    color: string;
    icon: React.ElementType;
}

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
                <div className="bg-blue-800 max-h-12">
                    <Icon
                        strokeWidth="2.5"
                        className={cx('h-12 w-12 p-3', {
                            ['fill-white']: color === 'blue'
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