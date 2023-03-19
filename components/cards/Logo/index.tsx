import React from 'react'
import Image from 'next/image'

export interface ILogo {
    name: string;
    logo: string;
    height: number;
    width: number;
}

// const myLoader = ({ src }: string): string => {
//     return src
// }

const Logo = ({
    name,
    logo,
    height,
    width
}: ILogo) => {
    console.log(logo)

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