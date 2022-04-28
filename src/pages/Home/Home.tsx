import React, {FC} from 'react';
import styles from './home.module.scss'
import agents from '../../assets/images/Sem-Título-1.png'
import gameplay from '../../assets/images/gameplay_1.jpg'
import reyna from '../../assets/images/reyna.gif'
import Slider from "../../components/Slider/Slider";
import {maps} from "../../data/maps";
import Button from "../../components/Common/Button/Button";

const Home: FC = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <h1>VALORANT</h1>
                            <p className={styles.text}>
                                All info about valorant patches, news, agents, abilities maps and other staff you can find here
                            </p>
                        </div>
                        <div className={styles.agentsHeader}>
                            <img width={400} src={agents} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.container}>
                    <div className={styles.valorant}>
                        <h1 data-aos-delay="300" data-aos={'fade-up'} data-aos-duration="1000">What is VALORANT?</h1>
                        <p data-aos-delay="500" data-aos={'fade-right'} data-aos-duration="2000">
                            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                        </p>
                        <div data-aos-delay="500" data-aos="fade-left" data-aos-duration="2000" className={styles.gameplayImg}>
                            <img width={500} src={gameplay} alt=""/>
                        </div>
                    </div>
                    <div className={styles.agents}>
                        <div className={styles.agentsInfo}>
                            <div data-aos-delay="1000" data-aos={'fade-right'} data-aos-duration="2000" className={styles.agentsText}>
                                <h1>Agents</h1>
                                <p>
                                    Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                                </p>
                            </div>
                            <div data-aos-delay="1000" data-aos="zoom-in" data-aos-duration="2000" className={styles.agentImg}>
                                <img src={reyna} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.episodes}>
                    <div data-aos={'fade-right'} data-aos-duration={'3000'} className={styles.episodesTitle}>
                        <span>More patches</span>
                        <h1>New episodes</h1>
                        <div className={styles.button}>
                            <Button background={'red'} text={'See new patches'} type={'button'}/>
                        </div>
                    </div>
                </div>
                <div className={styles.container}>
                    <h1 data-aos={'fade-right'} className={styles.sliderTitle}>Wide pool of maps</h1>
                    <div>
                        <Slider maps={maps}/>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;