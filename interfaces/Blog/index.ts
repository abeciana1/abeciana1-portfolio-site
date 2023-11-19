interface PostImageI {
    alt: string;
    url: string
}

interface PostTagI {
    color: string;
    tagName: string;
    id: string;
}

export interface PostI {
    id: string;
    excerpt: string;
    title: string;
    publishedDate: string;
    slug: string;
    content: string;
    featuredImage: PostImageI;
    blogPostTags: PostTagI[];
}