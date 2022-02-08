import React from 'react'
import styles from './Cases.module.scss'

import { cases } from './../../models/cases'
import ArticleHeader from './../ArticleHeader/ArticleHeader'
import SingleCase from './SingleCase'

const Cases = () => {
   
    return (
        <section className={styles.cases}>
            <ArticleHeader title="cases" showCategories={true} color1={true} />
            <div className={styles.section_content}>
                {
                    cases.map((case_, i) => (
                        <SingleCase
                            key={i}
                            title={case_.title}
                            category={case_.category}
                            muted={case_.muted}
                            pinned={case_.pinned}                        
                        />
                    ))
                }
            </div>            
        </section>
    )
}

export default Cases
