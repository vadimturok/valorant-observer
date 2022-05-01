import React, {FC} from 'react';
import styles from './agent.module.scss'
import {useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";

const Agent: FC = () => {
    const {agentId} = useParams()
    const {agents} = useAppSelector(state => state.agentReducer)
    const agent = agents.filter(agent => agent.uuid === agentId)[0]


    if(agent) {
        return (
            <div className={styles.agent}>
                <div className={styles.container}>
                    <div className={styles.agentInfo}>
                        <div className={styles.agentImages}>
                            <img className={styles.background} src={agent.background} alt={agent.background}/>
                            <img className={styles.agentImg} src={agent.fullPortrait} alt={agent.uuid}/>
                        </div>

                        <div className={styles.agentDescription}>
                            <h1>{agent.displayName}</h1>
                            <p>{agent.description}</p>
                            <div className={styles.role}>
                                <div className={styles.roleTitle}>
                                    <h4>{agent.role.displayName}</h4>
                                    <img className={styles.roleImg} src={agent.role.displayIcon}
                                         alt={agent.role.displayName}/>
                                </div>
                                <div className={styles.roleDescription}>
                                    <p>{agent.role.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Abilities</h3>
                    <div className={styles.abilities}>
                        {agent.abilities.map(ability => ability.slot !== 'Passive' &&(
                            <div key={ability.displayName} className={`${styles.ability} ${styles.flipRight}`}>
                                <div className={styles.front}>
                                    <div className={styles.frontInfo}>
                                        <h4>{ability.displayName}</h4>
                                        <img className={styles.abilityImage} src={ability.displayIcon} alt={ability.displayName}/>
                                    </div>

                                </div>
                                <div className={styles.back}>
                                    <p>
                                        {ability.description}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        );
    }else{
        return null
    }
};

export default Agent;