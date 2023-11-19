import { IPostData } from '@/interfaces'

export interface IPostImage {
    alt: string;
    url: string
}

export interface IPostTag {
    color: string;
    tagName: string;
    id: string;
}

export interface IPost extends IPostData {
    content: string;
}