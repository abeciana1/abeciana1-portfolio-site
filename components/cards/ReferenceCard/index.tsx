import Image from 'next/image'
import { IReferenceCard } from '@/interfaces'
import { ImQuotesRight } from "react-icons/im";

const ReferenceCard = ({
    review
}: {review: IReferenceCard}) => {

    return(
        <div className='flex flex-col md:flex-row items-center gap-10 justify-center bg-sky p-5 overflow-clip'>
            <div className="relative">
                <ImQuotesRight
                    size={75}
                    className="absolute top-0 right-0 -mr-5 md:-mr-10 lg:mr-0 -mt-1 rounded-full bg-altYellow p-2.5"
                />
                <Image
                    src={review.reviewerPic.url}
                    width={350}
                    height={350}
                    alt={review.reviewerName}
                    className='rounded-br-3xl rounded-tl-3xl mx-auto'
                />
                <div className="text-lg font-medium leading-relaxed text-center">{review.reviewerName}, {review.reviewerPosition} — {review.reviewerCompany}</div>
            </div>
            <div className='w-full md:w-9/12 overflow-y-auto'>
                <div className='text-lg leading-relaxed h-96'>
                    &quot;{review.testimonialBody}&quot;
                </div>
            </div>
        </div>
    )
}

export default ReferenceCard