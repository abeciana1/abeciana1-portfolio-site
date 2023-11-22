// import React from 'react'
// import { GetStaticProps } from 'next'
// import { CustomHead } from '@/components/utils/CustomHead'
// import dynamic from 'next/dynamic';

// const ProjectCard = dynamic(() => import('@/components/cards/ProjectCard'), {
//     ssr: false
// })

// const PortfolioPage = ({
//     projects
// }: any) => {

//     return (
//         <React.Fragment>
//             <CustomHead
//                 title="Portfolio"
//                 description="Alex Beciana | Creating projects for myself, friends, and clients."
//             />
//             <>
//                 <h2
//                     className="text-4xl leading-relaxed"
//                 >Portfolio projects</h2>
//                 <section
//                     className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
//                 >
//                     {projects.map((project: any) => {
//                         return <ProjectCard key={project.id} project={project?.properties} />
//                     })}
//                 </section>
//             </>
//         </React.Fragment>
//     )
// }

// export const getStaticProps: GetStaticProps = async () => {

//     const response = await getDatabase(process.env.NOTION_PORTFOLIO_DATABASE_ID)

//     return {
//         props: {
//             projects: response
//         },
//         revalidate: 600
//     }
// }


// export default PortfolioPage