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