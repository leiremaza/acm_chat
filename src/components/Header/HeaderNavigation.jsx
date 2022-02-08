import React from 'react'
import styles from './HeaderNavigation.module.scss'

import NavigationNotifications from './Navigation/NavigationNotifications'
import NavigationTasks from './Navigation/NavigationTasks'
import NavigationUser from './Navigation/NavigationUser'

const HeaderNavigation = (props) => {

    const navClass = props.hidden ? styles.hidden : styles.header_navi;

    return (
        <nav className={navClass}>
            <ul className={navClass}>
                <li><NavigationNotifications /></li>
                <li><NavigationTasks /></li>
                <li><NavigationUser /></li>
            </ul>                     
        </nav>
    )
}

export default HeaderNavigation
