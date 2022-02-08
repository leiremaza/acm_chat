import React from 'react'
import styles from './SingleUser.module.scss'

import { getUserIcon } from '../../utils/user'

const SingleUser = (props) => {

    const userPicture = getUserIcon(props.id);

    const userClass = [
        styles.user,
        props.connected ? styles.connected : ""
    ]

    const userStatusClass = [
        styles.user_status,
        props.connected ? styles.connected : ""
    ]

    return (
        <article className={userClass.join(" ")}>
            <div className={styles.user_info}>
                <div className={styles.user_icon}>
                    <img src={userPicture} alt={props.id} />
                </div>                            
                <h4 className={styles.user_name}>{props.name}</h4>
            </div>
            <div className={userStatusClass.join(" ")}></div>
        </article>
    )
}

export default SingleUser
