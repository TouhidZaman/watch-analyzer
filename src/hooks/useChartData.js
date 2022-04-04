import { useEffect, useState } from "react";

//Custom hook for loading chart data
const useChartData = () => {
   const [chartData, setChartData] = useState([]);

   //getting charts data
   useEffect(() => {
      fetch("data.json")
         .then((response) => response.json())
         .then((data) => setChartData(data));
   }, []);

   return [chartData, setChartData];
};

export default useChartData;
