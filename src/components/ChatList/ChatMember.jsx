import React from 'react'
import { getUserIcon } from '../../utils/user';
import styles from './ChatMember.module.scss'

const ChatMember = (props) => {

    const userPicture = getUserIcon(props.id);

    return (
        <div className={styles.user_icon}>
            <img src={userPicture} alt={props.id} />
        </div>    
    )
}

export default ChatMember
