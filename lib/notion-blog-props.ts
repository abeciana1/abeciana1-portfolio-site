export const slugProp = (post: any | undefined) => {
    return post["Slug"]["rich_text"][0]["plain_text"]
}

export const titleProp = (post: any | undefined) => {
    return post["Name"]["title"][0]["plain_text"]
}

export const publishedDateProp = (post: any | undefined) => {
    return post["PublishedDate"]["date"]["start"]
}

export const tagsProp = (post: any | undefined) => {
    return post["Tags"]["multi_select"]
}

export const excerptProp = (post: any | undefined) => {
    return post["Excerpt"]["rich_text"][0]["plain_text"]
}

export const hostedImageProp = (post: any | undefined) => {
    return post["hostedImage"]["rich_text"][0]["plain_text"]
}

export const clapsProp = (post: any | undefined) => {
    return post.Claps.number
}