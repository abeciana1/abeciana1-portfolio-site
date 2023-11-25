import { ParsedUrlQuery } from 'querystring'

export interface IPaths {
    [key: string]: IParams[]
}

export interface IParams extends ParsedUrlQuery {
    slug: string;
}