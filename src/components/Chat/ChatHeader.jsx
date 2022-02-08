import React from 'react'
import styles from './ChatHeader.module.scss'

import ChatCategory from '../ChatList/ChatCategory'
import ChatMember from '../ChatList/ChatMember'

const ChatHeader = (props) => {

    return (
        <div className={styles.chat_header}>
            <div className={styles.chat_info}>
                <h2 className={styles.title}>{props.title.toUpperCase()}</h2>
                <div className={styles.categories}>
                    {
                        props.categories.map((category, i) => (
                            <ChatCategory
                                key={i}
                                category={category} />
                        ))
                    }
                </div>
            </div>
            <div className={styles.members}>
                {
                    (props.members).map((user, i) => (
                       <ChatMember
                            key={i}
                            id={user} />
                    ))
                }
            </div>
        </div>
    )
}

export default ChatHeader
