export const slug = (post: any | undefined) => {
    return post["Slug"]["rich_text"][0]["plain_text"]
}

export const title = (post: any | undefined) => {
    return post["Name"]["title"][0]["plain_text"]
}

export const publishedDate = (post: any | undefined) => {
    return post["PublishedDate"]["date"]["start"]
}

export const tags = (post: any | undefined) => {
    return post["Tags"]["multi_select"]
}

export const excerpt = (post: any | undefined) => {
    return post["Excerpt"]["rich_text"][0]["plain_text"]
}