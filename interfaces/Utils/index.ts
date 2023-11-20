export interface IShareButtonProps {
    text: string;
    addClass?: string;
    textColor: string;
    disabled?: boolean;
    subject?: string | undefined;
    body?: string;
    backgroundColor?: string;
    sms?: boolean;
    icon: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IExpandLinkProps {
    text: string;
    textColor: string;
    backgroundColor?: string;
    icon: React.ElementType;
    addClass?: string;
    href: string;
    ariaLabel: string;
}

export interface IServiceIcon {
    text: string;
    color: string;
    icon: React.ElementType;
}

export interface INavBar {
    mobileNavOpen: boolean;
    toggleMobileNav: () => void;
}

export interface ICodeLine {
    text: string;
    prefix: string;
    textColor?: string;
    backgroundColor?: string;
}

export interface ICodeMockup {
    children: React.ReactNode;
    enableSection: boolean;
    background: string;
}

export interface ISeo {
    title?: string;
    description: string;
    image?: string;
}

export interface IBlogPostSeo {
    title?: string;
    description: string;
    article: IArticle;
    image: string;
}

interface IArticle {
    publishedTime?: string;
    modifiedTime?: string;
    blogTags: string[];
}

export interface ILink {
    href: string;
    className: string;
    linkText: string;
    alt: string;
}

export interface ILinkBtn {
    href: string;
    className?: string;
    linkText: string;
    alt: string;
    ctaButtonColor: string;
    showArrow?: boolean;
}

export interface ISideBar {
    children: React.ReactNode;
}