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
    const Icon = icon
    const [hovered, setHovered] = useState(false)

    return (
        <Fragment>
            <Icon
            />
        </Fragment>
    )
}