import ReactMarkdown from 'react-markdown'
import moment from 'moment'

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
                <img
                    src={companyLogo?.url || "/profile-pic.png"}
                    className="w-3/5 mx-auto"
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
                    {moment(startDate).format("MMM YYYY")} — {endDate === "2023-01-01" ? "Present" : moment(endDate).format("MMM YYYY")}
                </div>
                {companyWebsite && (
                    <a
                        href={companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-altBlue underline"
                        alt={companyName}
                    >
                        Website
                    </a>
                )}
                <p>
                    <ReactMarkdown
                        children={responsibilities}
                        components={{
                            ul({ node, children, ...props }) {
                                return (
                                    <ul
                                        className="list-disc ml-5"
                                        {...props}
                                    >
                                        <li>{ children }</li>
                                    </ul>
                                )
                            }
                        }}
                    />
                </p>
            </div>
        </section>
    )
}

export default JobCard