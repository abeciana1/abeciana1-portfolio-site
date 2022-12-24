import React from 'react'
import ReactMarkdown from 'react-markdown'

interface EduCardI {
    id: number;
    schoolName: string;
    schoolWebsite: string;
    schoolImage: string;
    achievements: string;
}

const EduCard = ({
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
                <img
                    src={schoolImage}
                    className="w-3/5 mx-auto"
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
                        className="text-altBlue underline"
                    >
                        Website
                    </a>
                )}
                <ReactMarkdown
                    children={achievements}
                    components={{
                        p({children }: any) {
                            return (
                                <p>
                                    { children }
                                </p>
                            )
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default EduCard