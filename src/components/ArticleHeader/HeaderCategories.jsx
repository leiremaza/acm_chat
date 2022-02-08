import React from 'react'
import styles from './HeaderCategories.module.scss'

import SingleCategory  from './SingleCategory'
import {categories} from './../../models/categories'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeaderCategories = (props) => {

    const categoriesClass =  [
        styles.categories,
        props.show ? "" : styles.hidden
    ]

    return (
        <div className={styles.section_header_categories}>
            <div className={categoriesClass.join(" ")}>
                {
                    categories.map((category, i) => (
                        <SingleCategory
                            key={i}
                            category={category} />
                    ))
                }                    
            </div>
            <button className={styles.add}>
                <FontAwesomeIcon icon={faPlus} size="1x" color="white"/>
            </button>
        </div>
    )
}

export default HeaderCategories
