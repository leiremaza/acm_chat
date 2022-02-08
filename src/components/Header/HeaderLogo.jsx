import React from 'react'
import styles from './HeaderLogo.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'

const HeaderLogo = () => {
    const projectName = "acm.chat"

    return (
        <a href="/index">
            <div className={styles.header_brand}>
                <div className={styles.header_logo}>
                    <FontAwesomeIcon icon={faCommentAlt} size="1x" className={styles.icon_right} />
                    <FontAwesomeIcon icon={faCommentAlt} size="1x" className={styles.icon_left} />
                </div>
                <h3 className={styles.header_slogan}>
                    {projectName}
                </h3>
            </div>
        </a>
    )
}

export default HeaderLogo
