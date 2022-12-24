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

        </React.Fragment>
    )
}

export default ProjectDetailsCard