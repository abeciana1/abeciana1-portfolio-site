import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

interface EduCardI {
    id: number;
    schoolName: string;
    schoolWebsite: string;
    schoolImage: string;
    achievements: string;
}

export const EduCard = ({
    id,
    schoolName,
    schoolWebsite,
    schoolImage,
    achievements
}: EduCardI) => {

    return (
        <div
            key={id}
            id={schoolName}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch py-8"
        >
            <div
                className="self-center"
            >
                <Image
                    width={200}
                    height={100}
                    src={schoolImage}
                    alt={`${schoolName} logo`}
                    className="mx-auto"
                />
            </div>
            <div
                className="self-center leading-9"
            >
                <h3
                    className="text-3xl"
                >
                    {schoolName}
                </h3>
                {schoolWebsite && (
                    <a
                        href={schoolWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 underline"
                    >
                        Website
                    </a>
                )}
                <ReactMarkdown
                    children={achievements}
                    components={{
                        p(props: any) {
                            return (
                                <p>
                                    { props.children }
                                </p>
                            )
                        }
                    }}
                />
            </div>
        </div>
    )
}