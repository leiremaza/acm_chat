import React from 'react'
import styles from './NavigationNotifications.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'


const NavigationNotifications = () => {
    return (
        <a href="">
            <div className={styles.notifications}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faBell} size="1x" color="silver" />
                </div>
                <div className={styles.bubble}>
                    <h5 className={styles.text}>5</h5>
                </div>
            </div>
        </a>
    )
}

export default NavigationNotifications
