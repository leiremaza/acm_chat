import React from 'react'
import styles from './NavigationUser.module.scss'

import { users } from './../../../models/users'
import { getUserIcon } from '../../../utils/user';

const NavigationUser = () => {

    const userId = "johanna_doe";
    const user = users.find(u => u.id = userId);
    const user_picture = getUserIcon(user.id);

    return (
        <a href="">
            <div className={styles.user}>
                <div className={styles.picture}>
                    <img src={user_picture} alt={user.id} />
                </div>
                <h3 className={styles.label}>{user.name}</h3>
            </div>
        </a>
    )
}

export default NavigationUser
