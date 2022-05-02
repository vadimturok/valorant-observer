import React, {FC} from 'react';
import styles from './mapItem.module.scss'
import {IMap} from "../../types";

const MapItem: FC<{map: IMap}> = ({map}) => {
    return (
        <div className={styles.mapItem}>
            <img
                className={styles.mapImg}
                src={map.splash}
                alt={map.displayName}
            />
            <div className={styles.overlay}>
            </div>
            <div className={styles.name}>#{map.displayName}</div>
        </div>

    );
};

export default MapItem;