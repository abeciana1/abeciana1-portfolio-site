import { Fragment, useState } from 'react';
import cx from 'classnames'
import { AiFillCaretUp } from 'react-icons/ai'
import { Transition } from '@headlessui/react'
import {
    IShareButtonProps,
    IExpandLinkProps
} from '@/interfaces'

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

    let emailHref; 
    if (subject && body) {
        emailHref = `mailto:?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`
    }

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

export const ScrollToTopBtn = () => {
    const [mouseHover, setHover] = useState(false)

    const clickToTopHandler = () => {
        if (window) {
            window.scroll({ 
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        }
    }

    return (
        <Fragment>
            <button
                aria-label='scroll back to top of page'
                onMouseEnter={() => setHover(!mouseHover)}
                onMouseLeave={() => setHover(!mouseHover)}
                className="z-50 bg-altRed h-14 w-14 rounded-full fixed bottom-2 border-white border-2 right-10"
                onClick={clickToTopHandler}
            >
                <Transition
                    as="span"
                    show={mouseHover}
                    enter="transition ease-in-out duration-700 transform"
                    enterFrom="translate-x-0 opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transition ease-in-out duration-700 transform"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-0 opacity-0"
                >
                    <span className="absolute bottom-1 right-16 text-white bg-black py-2 px-3 rounded-lg w-44 border-white border-2">Click to scroll to top</span>
                </Transition>
                <AiFillCaretUp
                    strokeWidth="2.5"
                    className="h-7 w-7 text-white mx-auto"
                />
            </button>
        </Fragment>
    )
}