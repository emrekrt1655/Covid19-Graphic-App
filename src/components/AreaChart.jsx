import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchDailyData } from "../api";

export default function AreaChart({ country }) {
  const [dailyData, setDailyData] = useState([]);
  const [lastData, setLastData] = useState();
  useEffect(() => {
    const fetchCountryDailyData = async () => {
      const data = await fetchDailyData(country);
      setDailyData(data);
      setLastData(data[data.length - 1]);
    };
    fetchCountryDailyData();
  }, [country]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "blue" }}> {lastData?.Country} </h1>
        <p>
          <span style={{ color: "blue" }}>Active:</span> {lastData?.Active}
        </p>
        <p>
          <span style={{ color: "blue" }}>Total:</span> {lastData?.Confirmed}
        </p>
        <p>
          <span style={{ color: "blue" }}>Recoverd:</span> {lastData?.Recovered}
        </p>
        <p>
          <span style={{ color: "blue" }}>Deaths</span> {lastData?.Deaths}
        </p>
      </div>

      <div id="chart">
        <Chart
          options={{
            chart: {
              height: 350,
              type: "area",
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
            },
            xaxis: {
              type: "datetime",
              categories: dailyData?.map((item) => item?.Date),
            },
            tooltip: {
              x: {
                format: "dd/MM/yy",
              },
            },
          }}
          series={[
            {
              name: "Cases",
              data: dailyData?.map((item) => item?.Confirmed),
            },
            {
              name: "Recovered",
              data: dailyData?.map((item) => item?.Recovered),
            },
            {
              name: "Deaths",
              data: dailyData?.map((item) => item?.Deaths),
            },
          ]}
          style={{
            marginTop: 100,
          }}
          height={400}
        />
      </div>
    </>
  );
}
