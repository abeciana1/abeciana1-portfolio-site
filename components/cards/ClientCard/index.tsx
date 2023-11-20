import React from 'react'
import Image from 'next/image'
import { IClientCard } from '@/interfaces'

const ClientCard = ({
    name,
    bio,
    link,
    logo,
}: IClientCard) => {
    
    return (
        <React.Fragment>
            <h3 className="text-3xl">
                About the client
            </h3>
            <div className="py-5">
                <Image
                    src={logo}
                    width={350}
                    height={400}
                    alt={`${name} - logo`}
                />
            </div>
            <div className="font-bold leading-8 whitespace-pre-line">
                {name}
                <span className="font-normal">{` | ${bio}`}</span>
            </div>
            <div>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-altBlue underline underline-offset-4"
                >
                    Company link
                </a>
            </div>
        </React.Fragment>
    )
}

export default ClientCard