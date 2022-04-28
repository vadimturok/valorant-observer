import React, {FC, useState} from 'react';
import styles from './slider.module.scss'
import next from '../../assets/images/right-arrow.png'
import prev from '../../assets/images/left-arrow.png'
import {MapImage} from "../../data/maps";

interface SliderProps{
    maps: MapImage[]
}

const Slider: FC<SliderProps> = ({maps}) => {
    const [current, setCurrent] = useState(0)
    const [side, setSide] = useState<'left' | 'right'>('right')
    const length = maps.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setSide('right')
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setSide('left')
    }

    return (
        <div className={styles.slider}>
            <img className={styles.right} src={prev} onClick={prevSlide}/>
            <img className={styles.left} src={next} onClick={nextSlide}/>
            {maps.map((map, index) => (
                <div className={styles.mapImgWrapper} key={map.name}>
                    {index === current && (
                        <div data-aos={side === 'left' ? 'fade-right' : 'fade-left'}>
                            <h1>{map.name}</h1>
                            <img  className={styles.mapImg} src={map.image} alt="map"/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Slider;