import React, { useState } from 'react'
import styles from './Header.module.scss'

import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import HeaderSearchbox from './HeaderSearchbox'
import HeaderEllipsis from './HeaderEllipsis'

const Header = () => {

    const [hidden, setHidden] = useState(false)

    const toggleHidden = () => {
        setHidden(!hidden);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <HeaderLogo />
                <HeaderSearchbox />
            </div>
            <div className={styles.header_right}>
                <HeaderNavigation hidden={hidden}/>
                <HeaderEllipsis toggleHidden={toggleHidden}/>
            </div>
        </header>
    )
}

export default Header
