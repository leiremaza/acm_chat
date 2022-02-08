import React, { useContext } from 'react'
import styles from './ChatList.module.scss'

import { chats } from '../../models/chats'
import ArticleHeader from '../ArticleHeader/ArticleHeader'
import SingleChat from './SingleChat'

const ChatList = () => {

    return (
        <section className={styles.chat_list}>
            <ArticleHeader title="chats" showCategories={true} color1={false} />
            <div className={styles.section_content}>
                {
                    chats.map((chat, i) => (
                        <SingleChat key={i} chat={chat}/>
                    ))
                }
            </div>
        </section>
    )
}

export default ChatList
