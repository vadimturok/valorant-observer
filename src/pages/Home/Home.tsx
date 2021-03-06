import React, {FC} from 'react';
import styles from './home.module.scss'
import gameplay from '../../assets/images/gameplay_1.jpg'
import reyna from '../../assets/images/reyna.gif'
import Slider from "../../components/Slider/Slider";
import Button from "../../components/Common/Button/Button";
import {useAppSelector} from "../../hooks";
import {Link} from "react-router-dom";

const Home: FC = () => {
    const {maps, isLoading} = useAppSelector(state => state.mapReducer)
    return (
        <>
            <div className={styles.background}>
                <div className={styles.headerTitle}>
                    <h1>Welcome to Valorant Observer</h1>
                    <h6>All info about Valorant patches, news, agents, abilities, maps and other you can find here</h6>
                </div>
                <div className={`${styles.wave} ${styles.wave1}`}/>
                <div className={`${styles.wave} ${styles.wave2}`}/>
                <div className={`${styles.wave} ${styles.wave3}`}/>
                <div className={`${styles.wave} ${styles.wave4}`}/>
            </div>
            <div className={styles.description}>
                <div className={styles.container}>
                    <div
                        data-aos-delay="500"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className={styles.valorant}
                    >
                        <h1>What is VALORANT?</h1>
                        <p>
                            Blend your style and experience on a global, competitive stage.
                            You have 13 rounds to attack and defend your side using
                            sharp gunplay and tactical abilities.
                            And, with one life per-round, you'll need to think faster than your opponent
                            if you want to survive.
                            Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                        </p>
                        <div className={styles.gameplayImg}>
                            <img width={500} src={gameplay} alt=""/>
                        </div>
                    </div>
                    <div className={styles.agents}>
                        <div className={styles.agentsInfo}>
                            <div
                                data-aos-delay="1000"
                                data-aos={'fade-right'}
                                data-aos-duration="2000"
                                className={styles.agentsText}
                            >
                                <h1>Agents</h1>
                                <p>
                                    Each map is a playground to showcase your creative thinking.
                                    Purpose-built for team strategies, spectacular plays, and clutch moments.
                                    Make the play others will imitate for years to come.
                                </p>
                                <Link to={'/agents'} className={'link'}>
                                    <Button background={'red'} text={'See agents'} type={'button'}/>
                                </Link>

                            </div>
                            <div
                                data-aos-delay="1000"
                                data-aos="zoom-in"
                                data-aos-duration="2000"
                                className={styles.agentImg}
                            >
                                <img src={reyna} alt="Reyna"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.episodes}>
                    <div
                        data-aos={'fade-right'}
                        data-aos-duration={'3000'}
                        className={styles.episodesTitle}
                    >
                        <span>More patches</span>
                        <h1>New episodes</h1>
                        <div className={styles.button}>
                            <Link to={'/patches'}>
                                <Button background={'red'} text={'See new patches'} type={'button'}/>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div
                        data-aos={'fade-right'}
                        data-aos-duration={'2000'}
                        data-aos-delay={'1000'}
                        className={styles.sliderInfo}
                    >
                        <h1 className={styles.sliderTitle}>Wide pool of maps</h1>
                        <p className={styles.mapText}>
                            Each map is a playground to showcase your creative thinking.
                            Purpose-built for team strategies, spectacular plays, and clutch moments.
                            Make the play others will imitate for years to come.
                        </p>
                        <div className={styles.mapsButton}>
                            <Link to={'/maps'}>
                                <Button type={'button'} background={'red'} text={'See maps'}/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.slider}>
                        {isLoading ? null : maps.length > 0 ? <Slider maps={maps}/> : <div>No maps</div>}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;