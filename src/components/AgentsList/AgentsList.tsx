import React, { FC } from "react";
import styles from "./agentsList.module.scss";
import AgentItem from "../AgentItem/AgentItem";
import {IAgent} from "../../types";

interface AgentsListProps{
    agents: IAgent[]
}

const AgentsList: FC<AgentsListProps> = ({agents}) => {
  return (
    <div className={styles.agentsList}>
        {agents.map(agent => agent.isPlayableCharacter && <AgentItem key={agent.uuid} agent={agent}/>)}
    </div>
  );
};

export default AgentsList;
