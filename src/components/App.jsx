import React from 'react'
import styles from './App.module.scss'

import Header from './Header/Header'
import Chat from './Chat/Chat'
import Cases from './Cases/Cases'
import ChatList from './ChatList/ChatList'
import Users from './Users/Users.jsx'

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <Cases />
        <Users />
        <ChatList />
        <Chat />
      </main>
    </div>
  )
}

export default App
