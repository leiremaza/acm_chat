import React from 'react'
import styles from './SingleCase.module.scss'

import SingleCaseCategory from './SingleCaseCategory'
import SingleCaseCtas from './SingleCaseCtas'

const SingleCase = (props) => {

    const caseClass = [
        styles.case,
        props.muted ? "muted" : "",
        props.pinned ? "pinned" : "",
        props.category
    ]

    return (
        <article className={caseClass.join(" ")}>
            <SingleCaseCategory title={props.title} category={props.category} />
            <SingleCaseCtas muted={props.muted} pinned={props.pinned} />
        </article>
    )
}

export default SingleCase
