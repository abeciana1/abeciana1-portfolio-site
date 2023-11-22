// import React, { lazy } from 'react'
// import { GetStaticProps, GetStaticPaths } from 'next'
// import {
//     getProjectSlug,
//     getClientInfo,
//     getProjectTitle,
//     getProjectStatus,
//     getClientType,
//     getProjectTools,
//     getProjectWorkAreas
// } from '../../lib/notion-proj-props'
// import ClientCard from '../../components/cards/ClientCard'
// import ProjectDetailsCard from '../../components/cards/ProjectDetailsCard'
// import { ScrollToTopBtn } from '../../components/utils/_buttons'
// import { BlogPostHead } from '../../components/utils/CustomHead'
// import { ITag } from '@/interfaces'

// const PortfolioProjectPage = ({ project, blocks }: any) => {

//     return (
//         <React.Fragment>
//             <BlogPostHead
//                 title={`Project | ${title}`}
//                 description={bio}
//                 article={{
//                     blogTags: projectTools.map((tool: ITag) => tool.tagName),
//                 }}
//                 image={logo}
//             />
//             <h1 className="mt-5 text-5xl font-reross leading-relaxed">{title}</h1>
//             <section className="flex flex-col md:flex-row md:space-x-10">
//                 <aside className="mt-16 md:basis-1/4 min-w-xl">
//                     <ClientCard
//                         name={name}
//                         bio={bio}
//                         logo={logo}
//                         link={link}
//                     />
//                     <ProjectDetailsCard
//                         status={status}
//                         clientType={clientType}
//                         projectTools={projectTools}
//                         workAreas={workAreas}
//                     />
//                 </aside>
//                 <section
//                     className="py-4 break-words md:basis-3/4 max-w-md lg:max-w-2xl"
//                 >
                    
//                 </section>
//                 <ScrollToTopBtn/>
//             </section>
//         </React.Fragment>
//     )
// }

// export default PortfolioProjectPage

// export const getStaticPaths: GetStaticPaths = async (context: any) => {
//     const paths = []
    
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps: GetStaticProps = async (context: any) => {

//     return {
//         props: {
//         },
//         revalidate: 600
//     }
// }