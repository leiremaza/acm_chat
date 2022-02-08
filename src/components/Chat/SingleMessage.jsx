import React from 'react'
import styles from './SingleMessage.module.scss'

import { users } from '../../models/users'
import { getUserIcon } from '../../utils/user'

const SingleMessage = (props) => {

    const bubbleClass = [
        styles.bubble,
        (props.user == "johanna_doe") ? styles.is_me_speaking : ""
    ]

    const msgUser = users.find(user => user.id === props.user);
    const userPicture = getUserIcon(msgUser.id);

    const userStatusClass = [
        styles.user_status,
        msgUser.connected ? styles.connected : ""
    ]

    return (
        <article className={styles.message}>
            <div className={bubbleClass.join(" ")}>
                <div className={styles.msg_left}>
                    <div className={styles.user_picture}>
                        <img src={userPicture} alt={msgUser.id} />
                    </div>
                    <div className={userStatusClass.join(" ")}></div>
                </div>
                <div className={styles.msg_right}>
                    <h3 className={styles.user_name}>{msgUser.name}</h3>
                    <p className={styles.msg_text}>{props.text}</p>
                </div>
            </div>
            <h5 className={styles.time}>{props.time}</h5>
        </article>
    )
}

export default SingleMessage
