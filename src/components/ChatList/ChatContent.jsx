import React from 'react'
import styles from './ChatContent.module.scss'

import DayJS from 'dayjs';

import ChatMember from './ChatMember';
import ChatCategory from './ChatCategory';

const ChatContent = (props) => {

    const date = "Up to " + DayJS(props.creationDate).format('YYYY.MM.DD');
    
    const dateClass = [
        styles.date, 
        props.selected ? styles.selected : ""
    ]

    return (
        <div className={styles.chat_body}>
            <div className={styles.members}>
                {
                    (props.members).map((user, i) => (
                       <ChatMember
                            key={i}
                            id={user} />
                    ))
                }
            </div>
            <div className={styles.chat_info}>
                <div className={styles.categories}>
                    {
                        props.categories.map((category, i) => (
                            <ChatCategory
                                key={i}
                                category={category} />
                        ))
                    }
                </div>
                <h5 className={dateClass.join(" ")}>{date}</h5>
            </div>
        </div>
    )
}

export default ChatContent
