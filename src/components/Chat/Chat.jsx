import React, {useState} from 'react'
import styles from './Chat.module.scss'
import DayJS from 'dayjs'

import SingleMessage from './SingleMessage'
import ChatFooter from './ChatFooter'

import {chats} from '../../models/chats'
import ChatHeader from './ChatHeader';

const Messages = () => {

    const chat = chats.find(chat => chat.selected);
    const messages_ = chat.messages;
    const [messages, setMessages] = useState(messages_);

    const addMessage = (ev) => {

        ev.preventDefault();

        if (ev.target.newMsg.value != "")
        {
            const newMessages = [...messages];

            newMessages.push({
                    user: "johanna_doe",
                    text: ev.target.newMsg.value,
                    time: DayJS().format("HH:MM")
                }
            );

            setMessages(newMessages);

            ev.target.newMsg.value = "";
        }

        
    }
 
    return (
        <section className={styles.chat}>
            <ChatHeader title={chat.title} categories={chat.categories} members={chat.members}/>
            <div className={styles.section_content}>
                {
                   messages.map((msg, i) => (
                        <SingleMessage
                            key={i}
                            user={msg.user}
                            text={msg.text}
                            time={msg.time} />
                    ))
                }
            </div>
            <ChatFooter addMessage={addMessage}/>
        </section>
    )
}

export default Messages
