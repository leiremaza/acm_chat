import React from 'react'
import styles from './NavigationTasks.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavigationTasks = () => {
    const myTasks = "My tasks";
    return (
        <a href="">
            <div className={styles.tasks} >
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faUser} size="1x" color="silver" />
                </div>
                <h4 className={styles.label}>{myTasks}</h4>
            </div>
        </a>
    )
}

export default NavigationTasks
