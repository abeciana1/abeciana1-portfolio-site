import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { ScrollToTopBtn } from '@/components/utils/_buttons'
import { BlogPostHead } from '@/components/utils/CustomHead'
import { ITag, IPaths, IParams, IProject } from '@/interfaces'
import { gql, GraphQLClient } from 'graphql-request'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import { TagCard } from '@/components/cards/TagCard'
import { projectStatusColors } from '@/lib/helper-functions'

const PortfolioProjectPage = ({ project }: {project: IProject}) => {

    return (
        <>
            <BlogPostHead
                title={`Project | ${project.projectTitle}`}
                description={project.excerpt}
                article={{
                    blogTags: project.projectTags.map((tool: ITag) => tool.tagName),
                }}
                image={project.featuredImage.url}
            />
            <h1 className="mt-5 text-5xl font-reross leading-relaxed">{project.projectTitle}</h1>
            <section className="flex flex-col-reverse md:flex-row md:space-x-10">
            <section
                    className="py-4 break-words md:basis-3/4 max-w-md lg:max-w-2xl leading-loose text-xl"
                >
                    <Markdown
                        children={project.projectDescription}
                        remarkPlugins={[gfm]}
                        components={{
                            input(props: any) {
                                const { node } = props
                                return (
                                    <input type="checkbox" readOnly={true} checked={node.properties.checked} />
                                )
                            }
                        }}
                    />
                </section>
                <section className="md:basis-1/4 min-w-xl">
                    <Image
                        src={project.featuredImage.url}
                        width={300}
                        height={300}
                        alt={`Alex Beciana | Portfolio Project | ${project.projectTitle}`}
                        className='mx-auto'
                    />
                    <div className="flex items-center py-5">
                            <span className="font-semiBold">Project status: </span>
                            <TagCard
                                id={project.id}
                                color={projectStatusColors?.[`${project.projectStatus}`]?.color}
                                tagName={projectStatusColors?.[`${project.projectStatus}`]?.text}
                                addClass="ml-1"
                            />
                    </div>
                    {project.projectTags && project.projectTags.length > 0 &&
                        <>
                            <div className="text-lg font-semiBold">What I used:</div>
                            <ul className="list-none flex flex-wrap space-x-1">
                                {project.projectTags.map((tag: ITag) => {
                                    return (
                                        <li key={tag.id}><TagCard color={tag.color} tagName={tag.tagName} /></li>
                                    )
                                })}
                            </ul>
                        </>
                    }
                </section>
                <ScrollToTopBtn/>
            </section>
        </>
    )
}

export default PortfolioProjectPage

export const getStaticPaths: GetStaticPaths = async () => {
    const projClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

    const projQuery = gql`
        query projects {
        projects(stage: PUBLISHED) {
            slug
        }
        }
    `

    const projPaths: IPaths = await projClient.request(projQuery)

    const paths = projPaths.projects.map((proj: IParams) => {
        return {
            params: {
                slug: proj.slug
            }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {slug} = context.params as IParams

    const projectQuery = gql`
        query projects {
        projects(stage: PUBLISHED, where: {slug: "${slug}"}) {
            excerpt
            projectDescription
            projectLink
            projectLinks
            projectStatus
            projectTitle
            slug
            featuredImage {
            url(transformation: {document: {output: {format: webp}}})
            }
            id
            projectTags {
                color
                id
                tagName
            }
        }
        }
    `

const projClient = new GraphQLClient(process.env.GRAPH_CMS_API_ENDPOINT || "")

const projData: any = await projClient.request(projectQuery)

    return {
        props: {
            project: projData.projects[0]
        },
        revalidate: 60 * 60 * 10
    }
}