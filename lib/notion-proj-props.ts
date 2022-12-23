export const getClientInfo = (project: any | undefined) => {
    return {
        clientName: project.properties.clientName.rich_text[0].plain_text,
        clientBio: project.properties.clientBio.rich_text[0].plain_text,
        clientLink: project.properties.clientLink.url,
        clientLogo: ""
    }
}

export const getProjectTitle = (project: any | undefined) => {
    return project.properties.projectTitle.title[0].plain_text
}

export const getProjectStatus = (project: any | undefined) => {
    return {
        color: project.properties.status.multi_select[0].color,
        name: project.properties.status.multi_select[0].name
    }
}

export const getProjectTools = (project: any | undefined) => {
    return project.properties.toolsUsed.multi_select
}

export const getClientType = (project: any | undefined) => {
    return {
        color: project.properties.type.select.color,
        name: project.properties.type.select.name
    }
}

export const getProjectWorkAreas = (project: any | undefined) => {
    return project.properties.workAreas.multi_select
}