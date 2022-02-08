import React from 'react'
import styles from './ArticleHeader.module.scss'
import HeaderCategories from './HeaderCategories'

const ArticleHeader = (props) => {

    const headerClass = [
        styles.section_header,
        props.showCategories ? "" : styles.hide,
        props.color1 ? styles.color1 : styles.color2
    ]

    const titleClass = [
        styles.title,
        styles.uppercase,
        props.showCategories ? "" : styles.centered
    ]

    return (
        <div className={headerClass.join(" ")}>
            <h2 className={titleClass.join(" ")}>{props.title}</h2>            
            <HeaderCategories show={props.showCategories} />
        </div>
    )
}

export default ArticleHeader
