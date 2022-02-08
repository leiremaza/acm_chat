import React from 'react'
import styles from './SingleCategory.module.scss'

const SingleCategory = (props) => {

    const categoryClass = [
        styles.category,
        styles[props.category]
    ]

    return (
        <button className={categoryClass.join(" ")}></button>
    )
}

export default SingleCategory
