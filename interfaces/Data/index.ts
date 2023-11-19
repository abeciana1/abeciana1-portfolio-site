import { IPostImage, IPostTag } from '@/interfaces'

export interface ITagData {
    id?: string;
    color: string;
    tagName: string;
}

export interface IPostData {
    id: string;
    excerpt: string;
    title: string;
    publishedDate: string;
    slug: string;
    featuredImage: IPostImage;
    blogPostTags: IPostTag[];
}