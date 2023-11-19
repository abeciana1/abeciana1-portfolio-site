import { ITagData, IPostData } from '@/interfaces'

export interface ITag extends ITagData {
    addClass?: string;
}

export interface IBlogPostCard {
    post: IPostData;
    imagePriority?: boolean;
    active: boolean;
}