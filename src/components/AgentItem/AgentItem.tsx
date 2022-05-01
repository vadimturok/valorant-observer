import React, { FC } from "react";
import styles from "./agentItem.module.scss";
import Button from "../Common/Button/Button";
import {IAgent} from "../../types";
import {Link} from "react-router-dom";

interface AgentItemProps{
  agent: IAgent
}

const AgentItem: FC<AgentItemProps> = ({agent}) => {
  return (
    <div className={styles.agent}>
      <div className={styles.agentItem}>
        <div className={styles.text}>
          <p>{agent.displayName}</p>
        </div>
        {agent.background && <img
            className={styles.background}
            src={agent.background}
            alt={agent.displayName}/>}
        <img
          className={styles.agentImg}
          src={agent.fullPortraitV2}
          alt={agent.displayName}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayText}>
            <h3>Abilities</h3>
          </div>
          <div className={styles.abilityList}>
            {agent.abilities.map(ability => ability.slot !== 'Passive' && (
                <div key={ability.displayName} className={styles.abilityItem}>
                  <span>{ability.displayName}</span>
                  <img
                      width={30}
                      height={30}
                      src={ability.displayIcon}
                      alt={ability.displayName}
                  />
                </div>
            ))}
          </div>
          <div className={styles.moreBtn}>
            <Link to={`agents/${agent.uuid}`}>
              <Button text={"More 🡆"} type={"button"} background={"simple"} />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentItem;
// transform: scale(.6, 1.5);
