import React from 'react'
import styles from './ChatFooter.module.scss'

const ChatFooter = (props) => {
  return (
    <footer className={styles.msg_box}>
      <form className={styles.form} onSubmit={props.addMessage}>
        <div className={styles.msg_input}>
          <input className={styles.input_control} type="text" name="newMsg" placeholder="Escribir mensaje..." />
        </div>
        <button className={styles.send}>Enviar</button>
      </form>
    </footer>
  )
}

export default ChatFooter
