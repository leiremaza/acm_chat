import React from 'react'
import styles from './SingleCaseCategory.module.scss'

const SingleCaseCategory = (props) => {

    const categoryClass = [
        styles.category,
        styles[props.category]
    ]

    return (
        <div className={styles.case_category}>
            <div className={categoryClass.join(" ")}> </div>
            <h4 className={styles.title}>{props.title}</h4>
        </div>
    )
}

export default SingleCaseCategory
