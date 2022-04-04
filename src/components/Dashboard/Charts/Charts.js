import React from "react";
import styles from "./Charts.module.css";
import useChartData from "../../../hooks/useChartData";
import DrawLineChart from "./DrawLineChart/DrawLineChart";
import DrawAreaChart from "./DrawAreaChart/DrawAreaChart";
import DrawBarChart from "./DrawBarChart/DrawBarChart";
import DrawPieChart from "./DrawPieChart/DrawPieChart";

const Charts = () => {
   const [chartData] = useChartData(); //custom hook
   console.log(chartData);
   return (
      <div className={styles.charts}>
         <div className={styles.chartsContainer}>
            <div className={styles.lineChart}>
               <h3>MONTH WISE SELL</h3>
               <DrawLineChart data={chartData} xAxis="month" dataKey={"sell"} />
            </div>
            <div className={styles.areaChart}>
               <h3>INVESTMENT VS REVENUE</h3>
               <DrawAreaChart
                  data={chartData}
                  xAxis="month"
                  firstDataKey={"investment"}
                  secondDataKey={"revenue"}
               />
            </div>
            <div className={styles.barChart}>
               <h3>INVESTMENT VS REVENUE</h3>
               <DrawBarChart
                  data={chartData}
                  xAxis="month"
                  firstDataKey={"investment"}
                  secondDataKey={"revenue"}
               />
            </div>
            <div className={styles.pieChart}>
               <h3>INVESTMENT VS REVENUE</h3>
               <DrawPieChart
                  data={chartData}
                  firstDataKey={"investment"}
                  secondDataKey={"revenue"}
               />
            </div>
         </div>
      </div>
   );
};

export default Charts;
