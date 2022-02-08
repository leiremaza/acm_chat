import React from 'react'
import styles from './HeaderEllipsis.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const HeaderEllipsis = (props) => {

    return (
        <button className={styles.header_ellipsis} onClick={props.toggleHidden}>
            <FontAwesomeIcon icon={faEllipsisV} size="1x" color="grey"/>
        </button>
    )
}

export default HeaderEllipsis
