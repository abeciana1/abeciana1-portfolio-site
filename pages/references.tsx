import { CustomHead } from '@/components/utils/CustomHead'
import { gql, GraphQLClient } from 'graphql-request'
import { IReferenceData } from '@/interfaces'

const ReferencesPage = ({ reviews }: {reviews: IReferenceData[]}) => {

    return (
        <>
            <CustomHead
                title="References"
                description="Alex Beciana | References from colleagues, freelance clients, supervisors, and instructors who can attest to my work ethic, competence, and reliability as a developer/engineer and teammate."
                image="./profile-callout-edited.webp"
            />
            <h1>What people are saying about me</h1>
        </>
    )
}

export default ReferencesPage

export const getServerSideProps = async () => {

    const reviewClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

    const reviewQuery = gql`
        query reviews {
        testimonials(stage: PUBLISHED) {
            id
            reviewerPic {
            id
            url(transformation: {document: {output: {format: webp}}})
            }
            reviewerName
            reviewerCompany
            reviewerPosition
            testimonialBody
        }
        }
    `

    const {testimonials}: {testimonials: IReferenceData[]} = await reviewClient.request(reviewQuery)

    return {
        prop: {
            reviews: testimonials
        }
    }
}