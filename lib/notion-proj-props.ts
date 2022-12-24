export const getClientInfo = (project: any | undefined) => {
    return {
        name: project.clientName.rich_text[0].plain_text,
        bio: project.clientBio.rich_text[0].plain_text,
        link: project.clientLink.url,
        logo: project.clientLogo.url
    }
}

export const getProjectTitle = (project: any | undefined) => {
    return project.projectTitle.title[0].plain_text
}

export const getProjectStatus = (project: any | undefined) => {
    return {
        id: project.status.multi_select[0].id,
        color: project.status.multi_select[0].color,
        name: project.status.multi_select[0].name
    }
}

export const getProjectTools = (project: any | undefined) => {
    return project.toolsUsed.multi_select
}

export const getClientType = (project: any | undefined) => {
    return {
        id: project.type.select.id,
        color: project.type.select.color,
        name: project.type.select.name
    }
}

export const getProjectWorkAreas = (project: any | undefined) => {
    return project.workAreas.multi_select
}

export const getProjectSlug = (project: any | undefined) => {
    return project.slug["rich_text"][0]["plain_text"]
}