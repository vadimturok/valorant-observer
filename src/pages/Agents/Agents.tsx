import React, { FC } from "react";
import styles from "./agents.module.scss";
import allAgents from "../../assets/images/all-agents.webp";
import AgentsList from "../../components/AgentsList/AgentsList";
import {useAppSelector} from "../../hooks";

const Agents: FC = () => {
    const {agents, error, isLoading} = useAppSelector(state => state.agentReducer)
   return (
    <div className={styles.agents}>
      <h1 className={styles.agentsTitle}>Valorant Agents List</h1>
      <img className={styles.agentsImg} src={allAgents} alt="all-agents" />
      <div className={styles.container}>
          {isLoading ? null : agents.length > 0 ? <AgentsList agents={agents}/> : <div>No agents</div>}
      </div>
    </div>
  );
};

export default Agents;
