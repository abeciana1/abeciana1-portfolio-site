import React from 'react'
import { TagCard, TagI } from '../TagCard'

interface DetailsI {
    status: TagI;
    clientType: TagI;
    projectTools: TagI[];
    workAreas: TagI[];
}

const ProjectDetailsCard = ({
    status,
    clientType,
    projectTools,
    workAreas
}: DetailsI) => {

    return (
        <React.Fragment>
            <section className="py-5 space-y-4 leading-8">
                <h3 className="text-3xl">
                    Project details
                </h3>
                {status && 
                    <div className="flex flex-wrap items-center font-bold">
                        Status:
                        <TagCard
                            id={status.id}
                            color={status.color}
                            name={status.name}
                            addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                        />
                    </div>
                }
                {clientType && 
                    <div className="flex flex-wrap items-center font-bold">
                        Client type:
                        <TagCard
                            id={clientType.id}
                            color={clientType.color}
                            name={clientType.name}
                            addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                        />
                    </div>
                }
                {projectTools &&
                    <div className="flex flex-wrap items-center font-bold">
                        Tools used:
                        {projectTools.map(({
                            id,
                            color,
                            name
                        }: TagI) => {
                            return (
                                <TagCard
                                    key={id}
                                    id={id}
                                    color={color}
                                    name={name}
                                    addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                                />
                            )
                        })}
                    </div>
                }
                {workAreas &&
                    <div className="flex flex-wrap items-center font-bold">
                    Work/services:
                        {workAreas.map(({
                            id,
                            name,
                            color
                        }: TagI) => {
                            return (
                                <TagCard
                                    key={id}
                                    id={id}
                                    color={color}
                                    name={name}
                                    addClass="font-normal ml-1 py-0.5 px-1.5 rounded-full text-xs"
                                />
                            )
                        })}
                    </div>
                }
            </section>
        </React.Fragment>
    )
}

export default ProjectDetailsCard