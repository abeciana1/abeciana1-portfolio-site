import React from 'react'

interface SideBarI {
    children: React.ReactNode;
}

const SideBarSharing = ({
    children
}: SideBarI) => {

    return (
        <aside>
            { children }
        </aside>
    )
}

export default SideBarSharing