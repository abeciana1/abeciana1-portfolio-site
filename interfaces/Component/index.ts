import { IBlogTag } from '@/interfaces'

export interface ILogo {
    name: string;
    logo: string;
    height: number;
    width: number;
}

export interface ILayout {
    children: React.ReactNode;
    addClass?: string;
}

export interface IFilterButton extends IBlogTag {
    addTagFilter: (tag: string) => void;
    active: boolean;
    removeTagFilter: (tag: string) => void;
}