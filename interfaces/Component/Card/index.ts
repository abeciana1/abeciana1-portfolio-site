import {
    ITagData,
    IPostData,
    IPostImage
} from '@/interfaces'

export interface ITag extends ITagData {
    addClass?: string;
}

export interface IProjectDetailsCard {
    status: ITag;
    clientType: ITag;
    projectTools: ITag[];
    workAreas: ITag[];
}

export interface ISkillCard {
    name: string;
    image: string;
}

export interface IBlogPostCard {
    post: IPostData;
    imagePriority?: boolean;
    active: boolean;
}

export interface IClientCard {
    name: string;
    bio: string;
    link: string;
    logo: string;
}

export interface IEduCard {
    id: number;
    schoolName: string;
    schoolWebsite: string;
    schoolImage: string;
    achievements: string;
}

export interface IJobCard {
    id: number;
    position: string;
    startDate: string;
    companyName: string;
    companyWebsite: string;
    companyDescription: string;
    companyLogo: string;
    endDate: string;
    responsibilities: string;
}

export interface IReferenceCard {
    reviewerPic: IPostImage;
    reviewerName: string;
    reviewerCompany: string;
    reviewerPosition: string;
    testimonialBody: string;
    callOut: string;
}