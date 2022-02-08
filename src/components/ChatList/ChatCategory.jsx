import React from 'react'
import styles from './ChatCategory.module.scss'

const ChatCategory = (props) => {

    const categoryClass = [
        styles.category,
        styles[props.category]
    ]

    return (
        <div className={categoryClass.join(" ")}></div>
    )
}

export default ChatCategory
