import { IProjectData, IPostTag } from '@/interfaces'

export interface IProject extends IProjectData {
    projectDescription: string;
    projectTags: IPostTag[] 
}