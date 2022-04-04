import React from "react";
import Charts from "./Charts/Charts";
import styles from "./Dashboard.module.css";

const Dashboard = () => {

   return (
      <div className={styles.dashboard}>
         <Charts />
      </div>
   );
};

export default Dashboard;
