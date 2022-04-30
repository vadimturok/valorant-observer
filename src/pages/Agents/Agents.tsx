import React, { FC } from "react";
import styles from "./agents.module.scss";
import AgentsList from "../../components/AgentsList/AgentsList";
import {useAppSelector} from "../../hooks";

const Agents: FC = () => {
    const {agents, isLoading} = useAppSelector(state => state.agentReducer)
   return (
    <div className={styles.agents}>
      <h1 className={styles.agentsTitle}>Valorant Agents List</h1>
        <div className={styles.background}/>
      <div className={styles.container}>
          {isLoading ? null : agents.length > 0 ? <AgentsList agents={agents}/> : <div>No agents</div>}
      </div>
    </div>
  );
};

export default Agents;
