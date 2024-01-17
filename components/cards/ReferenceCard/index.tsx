import Image from 'next/image'
import { IReferenceCard } from '@/interfaces'
import { ImQuotesRight } from "react-icons/im";

const ReferenceCard = ({
    review
}: {review: IReferenceCard}) => {

    return(
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 justify-center bg-gray-200 p-5 overflow-clip rounded-xl'>
            <div className="relative">
                <ImQuotesRight
                    size={75}
                    className="absolute top-0 right-0 -mr-5 md:-mr-10 lg:mr-0 -mt-1 rounded-full bg-altYellow p-2.5"
                />
                <Image
                    src={review.reviewerPic.url}
                    width={250}
                    height={250}
                    alt={review.reviewerName}
                    className='rounded-full mx-auto w-56 h-56'
                />
                <div className="text-lg font-medium leading-relaxed text-center">{review.reviewerName}, {review.reviewerPosition} — {review.reviewerCompany}</div>
                <div className='text-lg my-2 bg-altYellow w-fit mx-auto font-medium py-0.5 px-2 rounded-md'>&quot;{review.callOut}&quot;</div>
            </div>
            <div className='w-full overflow-y-auto bg-white p-2 rounded-lg'>
                <div className='text-lg leading-relaxed max-h-96'>
                    &quot;{review.testimonialBody}&quot;
                </div>
            </div>
        </div>
    )
}

export default ReferenceCard