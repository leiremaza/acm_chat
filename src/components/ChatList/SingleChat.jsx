import React, {useContext} from 'react'
import styles from './SingleChat.module.scss'

import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';

const SingleChat = ({chat}) => {

    const chatClass = [
        styles.chat,
        (chat.categories).join(" "),        
        chat.selected ? styles.selected : ""
    ];

    return (
        <article className={chatClass.join(" ")}>
            <ChatHeader 
                title={chat.title}
                muted={chat.muted} 
                pinned={chat.pinned}
                selected={chat.selected} />
            <ChatContent 
                members={chat.members} 
                categories={chat.categories}
                creationDate={chat.creationDate}
                selected={chat.selected} />
        </article>
    )
}

export default SingleChat
