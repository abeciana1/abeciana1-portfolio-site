import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const useResponsiveness = () => {
    const [isClient, setIsClient] = useState(false);

    const isSmallMobile = useMediaQuery({
        minWidth: 320,
        maxWidth: 375
    })

    const isLargeMobile = useMediaQuery({
        minWidth: 376,
        maxWidth: 480
    })

    const isTablet = useMediaQuery({
        minWidth: 481,
        maxWidth: 768
    })

    const isSmallLaptop = useMediaQuery({
        minWidth: 769,
        maxWidth: 1024
    })

    const isDesktop = useMediaQuery({
        minWidth: 1025,
        maxWidth: 1440
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        }
    })

    if (isClient) {
        return {
            isSmallMobile,
            isLargeMobile,
            isTablet,
            isSmallLaptop,
            isDesktop
        }
    }
}

export default useResponsiveness