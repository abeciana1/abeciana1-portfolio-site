import { useState } from 'react';
import cx from 'classnames'

interface IExpandButtonProps {
    text: string;
    textColor: string;
    disabled?: boolean;
    backgroundColor?: string;
    icon: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    addClass: string;
}

export const ExpandBtn = ({
    text,
    icon,
    textColor,
    backgroundColor,
    onClick,
    addClass
}: IExpandButtonProps) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    return (
        <button
            onClick={onClick}
            className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['bg-royalBlue']: backgroundColor === 'royalBlue',
                ['bg-scarlet']: backgroundColor === 'scarlet',
                ['bg-green-400']: backgroundColor === 'bg-green-400',
                ['rounded-lg']: open,
                [addClass]: addClass
            })}
            onMouseEnter={expandHandler}
            onMouseLeave={expandHandler}
        >
            <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['text-coolGray']: textColor === 'coolGray',
                ['mx-auto']: open === false
            })} />
            {open &&
                <div className="font-medium ml-2 whitespace-nowrap">
                    {text}
                </div>
            }
        </button>
    )
}

interface IExpandLinkProps {
    text: string;
    textColor: string;
    disabled?: boolean;
    backgroundColor?: string;
    icon: React.ElementType;
    addClass: string;
    href: string;
    // altText: string;
}

export const ExpandBtnLink = ({
    text,
    icon,
    textColor,
    backgroundColor,
    addClass,
    href,
    // altText
}: IExpandLinkProps) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    return (
        <a
            href={href}
            className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['bg-royalBlue']: backgroundColor === 'royalBlue',
                ['bg-scarlet']: backgroundColor === 'scarlet',
                ['bg-green-400']: backgroundColor === 'bg-green-400',
                ['rounded-lg']: open,
                [addClass]: addClass
            })}
            onMouseEnter={expandHandler}
            onMouseLeave={expandHandler}
        >
            <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                ['text-altWhite']: textColor === 'altWhite',
                ['text-royalBlue']: textColor === 'royalBlue',
                ['text-coolGray']: textColor === 'coolGray',
                ['mx-auto']: open === false
            })} />
            {open &&
                <div className="font-medium ml-2 whitespace-nowrap">
                    {text}
                </div>
            }
        </a>
    )
}