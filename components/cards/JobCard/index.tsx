import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { format, add } from 'date-fns'

interface JobCardI {
    id: number;
    position: string;
    startDate: string;
    companyName: string;
    companyWebsite: string;
    companyDescription: string;
    companyLogo: string;
    endDate: string;
    responsibilities: string;
}

const JobCard = ({
    id,
    position,
    startDate,
    companyName,
    companyWebsite,
    companyDescription,
    companyLogo,
    endDate,
    responsibilities
}: JobCardI) => {

    return (
        <section
            key={id}
            id={companyName}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch py-8"
        >
            <div
                className="self-center"
            >
                <Image
                    width={200}
                    height={100}
                    src={companyLogo || "/profile-pic.webp"}
                    alt={`${companyName} logo`}
                    className="mx-auto"
                />
                <div
                    className="text-center mt-5 text-lg"
                >
                    {companyDescription}
                </div>
            </div>
            <div
                className="self-center leading-9"
            >
                <h3
                    className="text-3xl"
                >
                    {companyName}
                </h3>
                <h4
                    className="text-2xl"
                >
                    {position}
                </h4>
                <div
                    className="text-xl"
                >
                    {format(new Date(startDate), "MMM yyyy")} — {endDate === "2023-01-01" ? "Present" : format(new Date(endDate), "MMM yyyy")}
                </div>
                {companyWebsite && (
                    <a
                        href={companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-altBlue underline"
                    >
                        {companyName} - Website
                    </a>)}
                    <ReactMarkdown
                        children={responsibilities}
                        components={{
                            ul(props: any) {
                                return (
                                    <ul
                                        className="list-disc ml-5"
                                    >
                                        {props.children}
                                    </ul>
                                )
                            }
                        }}
                    />
            </div>
        </section>
    )
}

export default JobCard