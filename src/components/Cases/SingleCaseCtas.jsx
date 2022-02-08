import React, {useState} from 'react'
import styles from './SingleCaseCtas.module.scss'
import {cases} from './../../models/cases'
import {VolumeOffRounded, PushPinRounded} from '@mui/icons-material';

const SingleCaseCtas = (props) => {

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
        muteState ? styles.muted : ""
    ];

    const pinnedButtonClass = [
        styles.button,
        styles.pin,
        pinState ?  styles.pinned : ""
    ];

    return (
        <div className={styles.case_ctas}>
            <button className={mutedButtonClass.join(" ")} onClick={toggleMute}>
                <VolumeOffRounded fontSize="13px" />
            </button>
            <button className={pinnedButtonClass.join(" ")} onClick={togglePin}>
                <PushPinRounded fontSize="13px" />
            </button>
        </div>
    )
}

export default SingleCaseCtas
