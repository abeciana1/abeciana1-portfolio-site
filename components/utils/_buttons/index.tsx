import { useState } from 'react';
import cx from 'classnames'

interface IShareButtonProps {
    text: string;
    addClass?: string;
    textColor: string;
    disabled?: boolean;
    subject?: any;
    body?: any;
    backgroundColor?: string;
    sms?: boolean;
    icon: React.ElementType;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const ShareBtn = ({
    text,
    icon,
    subject,
    body,
    textColor,
    backgroundColor,
    sms,
    onClick,
    addClass = ""
}: IShareButtonProps) => {

    const Icon = icon as React.ElementType

    const [open, setClose] = useState(false)
    
    const expandHandler = () => {
        if (open) {
            setClose(false)
        } else {
            setClose(true)
        }
    }

    const emailHref = `mailto:?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`

    const smsHref = `sms=?body=${body}`

    return (
        <>
        {onClick ?
            <button
                onClick={onClick}
                className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['text-white']: textColor === 'white',
                    ['text-altBlue']: textColor === 'altBlue',
                    ['text-black']: textColor === 'black',
                    ['bg-black']: backgroundColor === 'black',
                    ['bg-altBlue']: backgroundColor === 'altBlue',
                    ['bg-altRed']: backgroundColor === 'altRed',
                    ['bg-altYellow']: backgroundColor === 'altYellow',
                    ['bg-green-400']: backgroundColor === 'bg-green-400',
                    ['rounded-full']: open,
                    [addClass]: addClass
                })}
                onMouseEnter={expandHandler}
                onMouseLeave={expandHandler}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['text-white']: textColor === 'white',
                    ['text-altBlue']: textColor === 'altBlue',
                    ['text-black']: textColor === 'black',
                    ['mx-auto']: open === false
                })} />
                {open &&
                    <div className={cx("font-medium ml-2 whitespace-nowrap", {
                        ['text-white']: textColor === 'white',
                        ['text-altBlue']: textColor === 'altBlue',
                        ['text-coolGray']: textColor === 'coolGray',
                    })}>
                        {text}
                    </div>
                }
            </button>
        :
            <a
                href={sms ? smsHref : emailHref}
                className={cx('py-2 hover:px-4 flex overflow-hidden expand-btn rounded-full items-center', {
                    ['text-white']: textColor === 'white',
                    ['text-altBlue']: textColor === 'altBlue',
                    ['text-black']: textColor === 'black',
                    ['bg-black']: backgroundColor === 'black',
                    ['bg-altBlue']: backgroundColor === 'altBlue',
                    ['bg-altRed']: backgroundColor === 'altRed',
                    ['bg-altYellow']: backgroundColor === 'altYellow',
                    ['bg-green-400']: backgroundColor === 'bg-green-400',
                    ['rounded-full']: open,
                    [addClass]: addClass
                })}
                onMouseEnter={expandHandler}
                onMouseLeave={expandHandler}
            >
                <Icon strokeWidth="2.5" className={cx('h-5 w-5', {
                    ['fill-white']: textColor === 'white',
                    ['fill-altBlue']: textColor === 'altBlue',
                    ['fill-black']: textColor === 'black',
                    ['mx-auto']: open === false
                })} />
                {open &&
                    <div className={cx("font-medium ml-2 whitespace-nowrap", {
                        ['text-white']: textColor === 'white',
                        ['text-altBlue']: textColor === 'altBlue',
                        ['text-coolGray']: textColor === 'coolGray',
                    })}>
                        {text}
                    </div>
                }
            </a>
        }
        </>
    )
}

interface IExpandLinkProps {
    text: string;
    textColor: string;
    backgroundColor?: string;
    icon: React.ElementType;
    addClass?: string;
    href: string;
    ariaLabel: string;
}

export const ExpandBtnLink = ({
    text,
    icon,
    textColor,
    backgroundColor,
    addClass = "",
    href,
    ariaLabel
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
            target="_blank"
            rel="noreferrer"
            className={cx('py-2 hover:pl-2 flex overflow-hidden expand-btn rounded-full items-center', {
                ['text-white']: textColor === 'white',
                ['text-altBlue']: textColor === 'altBlue',
                ['bg-altBlue']: backgroundColor === 'altBlue',
                ['bg-black']: backgroundColor === 'black',
                ['bg-altRed']: backgroundColor === 'altRed',
                ['bg-green-400']: backgroundColor === 'bg-green-400',
                ['rounded-full']: open,
                [addClass]: addClass
            })}
            onMouseEnter={expandHandler}
            onMouseLeave={expandHandler}
            aria-label={ariaLabel}
        >
            <Icon strokeWidth="1" className={cx('h-7 w-7', {
                ['fill-white']: textColor === 'white',
                ['fill-altBlue']: textColor === 'altBlue',
                ['fill-coolGray']: textColor === 'coolGray',
                ['mx-auto']: open === false
            })} />
            {open &&
                <div className={cx("font-medium ml-2 whitespace-nowrap", {
                    ['text-white']: textColor === 'white',
                    ['text-altBlue']: textColor === 'altBlue',
                    ['text-coolGray']: textColor === 'coolGray',
                })}>
                    {text}
                </div>
            }
        </a>
    )
}