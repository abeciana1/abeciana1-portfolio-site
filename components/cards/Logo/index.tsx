import React from 'react'
import Image from 'next/image'
import { ILogo } from '@/interfaces'

const Logo = ({
    name,
    logo,
    height,
    width
}: ILogo) => {

    return (
        <React.Fragment>
            <Image
                src={logo}
                alt={name + "client logo"}
                width={width}
                height={height}
            />
        </React.Fragment>
    )
}

export default Logo