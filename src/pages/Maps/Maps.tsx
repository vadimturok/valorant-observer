import React, {FC} from 'react';
import styles from './maps.module.scss'
import MapItem from "../../components/MapItem/MapItem";
import {useAppSelector} from "../../hooks";

const Maps: FC = () => {
    const {maps, isLoading} = useAppSelector(state => state.mapReducer)
    return (
            <div className={styles.container}>
                <h1>Maps</h1>
                <div className={styles.mapList}>
                    {isLoading ? null : maps.length > 0
                        ?
                        maps.map(map => <MapItem key={map.uuid} map={map}/>)
                        :
                        <div>No maps</div>
                    }
                </div>
            </div>
    );
};

export default Maps;