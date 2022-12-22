export const getClientInfo = (project: any | undefined) => {
    return {
        clientName: project.properties.clientName.rich_text[0].plain_text,
        clientBio: project.properties.clientBio.rich_text[0].plain_text,
        clientLink: project.properties.clientLink.url,
        clientLogo: ""
    }
}