import React from 'react'
import styles from './HeaderSearchbox.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeaderSearchbox = () => {
    return (
        <div className={styles.header_searchbox}>
            <form className={styles.form}>
                <div className={styles.searchbox_icon}>
                    <FontAwesomeIcon icon={faSearch} size="1x" color="grey"/>
                </div>
                <div className={styles.searchbox_input}>
                    <input type="text" className={styles.input_control} placeholder="Search..." />
                </div>
            </form>
        </div>
    )
}

export default HeaderSearchbox
