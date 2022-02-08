import React from 'react'
import styles from './Users.module.scss'

import ArticleHeader from '../ArticleHeader/ArticleHeader'
import {users} from './../../models/users'
import SingleUser from './SingleUser'

const Users = () => {

    let usersCopy = [...users];
    usersCopy.shift();

    return (
        <section className={styles.users}>
            <ArticleHeader title="connected" showCategories={false} color1={true}/>
            <div className={styles.section_content}>
                {
                    usersCopy.map((user, i) => (
                        <SingleUser
                            key={i}
                            id={user.id}
                            name={user.name}                            
                            connected={user.connected} />
                    ))
                }
            </div>
        </section>
    )
}

export default Users
