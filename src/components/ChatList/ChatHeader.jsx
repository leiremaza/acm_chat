import React, {useState} from 'react'
import styles from './ChatHeader.module.scss'

import { VolumeOffRounded, PushPinRounded } from '@mui/icons-material';

const ChatHeader = (props) => {

    const titleClass = [
        styles.title,
        props.selected ? styles.selected : ""
    ]

    const [muteState, setMute] = useState(props.muted);
    const [pinState, setPin] = useState(props.pinned);

    const toggleMute = () => {
        setMute(!muteState);
    }

    const togglePin = () => {
        setPin(!pinState);
    }

    const mutedButtonClass = [
        styles.button,
        styles.mute,
        muteState ? styles.muted : "",
        props.selected ? styles.selected : ""
    ];

    const pinnedButtonClass = [
        styles.button,
        styles.pin,
        pinState ?  styles.pinned : "",
        props.selected ? styles.selected : ""
    ];

    return (
        <div className={styles.chat_header}>
            <h3 className={titleClass.join(" ")}>{props.title}</h3>
            <div className={styles.ctas}>
                <button className={mutedButtonClass.join(" ")} onClick={toggleMute}>
                    <VolumeOffRounded fontSize="13px" />
                </button>
                <button className={pinnedButtonClass.join(" ")} onClick={togglePin}>
                    <PushPinRounded fontSize="13px" />
                </button>
            </div>
        </div>
    )
}

export default ChatHeader
