import {
    IPostImage,
    IPostTag
} from '@/interfaces'

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

export interface IClientData {
    name: string;
    bio: string;
    logo: string;
}

interface IAdditionaProjectLink {
    link: string;
    text: string;
}

export interface IProjectData {
    id: string;
    excerpt: string;
    projectLink: string;
    projectLinks: IAdditionaProjectLink[];
    projectStatus: string;
    projectTitle: string;
    slug: string;
    featuredImage: {
        url: string;
    };
}