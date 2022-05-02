import React, {FC, useState} from 'react';
import styles from './slider.module.scss'
import {IMap} from "../../types";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface SliderProps{
    maps: IMap[]
}

const Slider: FC<SliderProps> = ({maps}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={styles.slider}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {maps.map(map => (
                    <Carousel.Item key={map.uuid}>
                        <h1>{map.displayName}</h1>
                        <img className={styles.mapImg} src={map.splash} alt={map.displayName}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
