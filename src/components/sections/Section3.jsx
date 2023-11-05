import { useState, useEffect } from "react";
import recommendations, { data } from "../../data/recommendations";
import { Circle, Close } from "@mui/icons-material";
import CircularSlider from "@fseehawer/react-circular-slider";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Section3 = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Risk Factor",
        data: [],
        backgroundColor: "#005a58",
        borderColor: "#005a58",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Function to update the bar chart data
    const updateBarChartData = () => {
      const selectedData = data[rangeValue];
      const labels = Object.keys(selectedData).filter(
        (key) => key !== "Risk Score" && selectedData[key] !== 0
      );
      const values = labels.map((key) => selectedData[key]);

      // Create a new data object for the bar chart
      const newData = {
        labels: labels,
        datasets: [
          {
            data: values,
            backgroundColor: "#005a58",
            borderColor: "#005a58",
            borderWidth: 1,
            borderRadius: 4,
            barPercentage: 1.1,
            hoverBackgroundColor: "#475569",
          },
        ],
      };

      // Update the bar chart data
      setBarChartData(newData);
    };

    updateBarChartData();
  }, [rangeValue]);

  const showRecommendation = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="py-9 ">
      <div className="  justify-between w-10/12   mx-auto">
        <div className="main_work_section flex-grow flex-wrap-reverse gap-4   justify-center flex md:justify-between">
          <div className="w-[40rem] font-bold">
            <Bar
              data-aos="fade-down"
              // className="w-[40rem] font-bold"
              data={barChartData}
              options={{
                datasetStrokeWidth: 5,
                indexAxis: "y",
                showTooltips: true,
                scales: {
                  x: {
                    // beginAtZero: false,
                    grid: {
                      display: false,
                    },
                    border: {
                      display: false,
                    },
                    ticks: {
                      display: false, //this will remove only the label
                    },
                    barPercentage: 0.1,
                  },
                  y: {
                    beginAtZero: false,
                    grid: {
                      display: false,
                    },
                    border: {
                      display: false,
                    },
                  },
                },
              }}
            />

            <div data-aos="fade-right">
              <ul className="flex flex-wrap font-medium gap-2 my-4">
                {Object.keys(data[rangeValue]).map((key) => {
                  const value = data[rangeValue][key];
                  if (key !== "Risk Score" && value === 0) {
                    return <li key={key}>{`${key}: 0%`}</li>;
                  }
                })}
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex md:gap-0 gap-6 flex-col justify-evenly "
          >
            <CircularSlider
              value={rangeValue}
              label="Risk Factor:"
              min={0}
              max={10}
              dataIndex={7}
              labelColor="#005a58"
              knobColor="#005a58"
              knobSize={50}
              progressColorFrom="#00bfbd"
              progressColorTo="#005a58"
              progressSize={20}
              trackColor="#eeeeee"
              trackSize={20}
              onChange={(value) => setRangeValue(value)}
            >
              <Circle className="text-slate-200" />
            </CircularSlider>

            {rangeValue >= 0 && (
              <button
                className="p-3 text-slate-50 bg-amber-500"
                onClick={showRecommendation}
              >
                View Recommendation
              </button>
            )}
          </div>
        </div>
        {/* <div className="w-1/3 text-justify">
        <h1>Smarter investing, brilliantly personalized.</h1>
        <p>
          Just answer a few questions, and we’ll build you a personalized
          portfolio of low-cost index funds from up to 17 global asset classes.
          Our software handles all the trading, rebalancing, and other busywork
          to help grow your wealth for the long term.
        </p>
        <h1>{rangeValue}</h1>
      </div> */}

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="fixed inset-0 bg-black opacity-50 cursor-pointer"
              onClick={closePopup}
            ></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-50">
              <button
                onClick={closePopup}
                className="float-right bg-amber-500 text-white px-2 py-2 rounded hover:bg-amber-700"
              >
                <Close />
              </button>
              <h2 className="text-2xl mb-4">Recommendation</h2>
              <p>{recommendations[rangeValue].text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section3;
