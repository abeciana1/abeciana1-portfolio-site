import {
    IPostImage,
    IPostTag,
    IReferenceCard
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
    featuredImage: IPostImage;
}

export interface IReferenceData extends IReferenceCard {
    id: string;
}

export interface IJoke {
    question: string;
    punchline: string;
}

export interface IJob {
    id: string;
    position: string;
    startDate: string;
    companyName: string;
    companyWebsite: string;
    companyDescription: string;
    companyLogo: IPostImage;
    endDate: string;
    responsibilities: string;
}

export interface IEducation {
    id: string;
    schoolName: string;
    schoolWebsite: string;
    schoolImage: IPostImage;
    achievements: string;
}

export interface IExperience {
    jobs: IJob[];
    educations: IEducation[];
}

export interface IBlogTag {
    tagName: string;
}