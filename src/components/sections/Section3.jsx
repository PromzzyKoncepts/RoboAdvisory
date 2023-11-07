/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import recommendations, { data } from "../../data/recommendations";
import { Circle, Close } from "@mui/icons-material";
import CircularSlider from "@fseehawer/react-circular-slider";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Section3 = () => {

  const getRiskPointText = (riskPoint) => {
    switch (riskPoint) {
      case "nigerian_stocks":
        return (
          <>
            To give you exposure to US stocks, we suggest Vanguard Total Stock
            Market ETF (VTI) and Schwab US Broad Market ETF (SCHB) in our
            Classic portfolios or iShares ESG Aware MSCI USA ETF (ESGU) in our
            SRI portfolios.
          </>
        );
      case "foreign_stocks":
        return (
          <>
            We suggest funds like Vanguard FTSE Developed Markets ETF (VEA) and
            Schwab International Equity ETF (SCHF) to help provide
            diversification from US stocks, since they react differently to
            economic situations than U.S. stocks do.
          </>
        );
      case "tech_stocks":
        return (
          <>
            We suggest funds like Vanguard S&P National AMT-Free Muni (VTEB) and
            State Street Barclays Capital Muni (TFI). Issued by U.S. state and
            local governments, these bonds are exempt from federal income taxes.
            They provide investors in high tax brackets a tax-efficient way to
            obtain income, low volatility, and diversification.
          </>
        );
      case "nigerian_bonds":
        return (
          <>
            We suggest funds like Vanguard Dividend Appreciation (VIG) and
            Schwab Dow Jones U.S. Dividend 100 Index (SCHD). U.S. stocks with a
            history of increasing their dividend payouts over time tend to be
            large-cap well-run companies in less cyclical industries and thus
            less volatile.
          </>
        );
      case "emerging_stocks":
        return (
          <>
            We suggest funds like Vanguard Dividend Appreciation (VIG) and
            Schwab Dow Jones U.S. Dividend 100 Index (SCHD). U.S. stocks with a
            history of increasing their dividend payouts over time tend to be
            large-cap well-run companies in less cyclical industries and thus
            less volatile.
          </>
        );
      case "foreign_bonds":
        return (
          <>
            We suggest funds like Vanguard Dividend Appreciation (VIG) and
            Schwab Dow Jones U.S. Dividend 100 Index (SCHD). U.S. stocks with a
            history of increasing their dividend payouts over time tend to be
            large-cap well-run companies in less cyclical industries and thus
            less volatile.
          </>
        );
      case "commodities":
        return (
          <>
            We suggest funds like Vanguard Dividend Appreciation (VIG) and
            Schwab Dow Jones U.S. Dividend 100 Index (SCHD). U.S. stocks with a
            history of increasing their dividend payouts over time tend to be
            large-cap well-run companies in less cyclical industries and thus
            less volatile.
          </>
        );
      default:
        return "";
    }
  };
  const getHeading = (riskPoint) => {
    switch (riskPoint) {
      case "nigerian_stocks":
        return (
          <>
            Nigerian Stocks
          </>
        );
      case "foreign_stocks":
        return (
          <>
            Foreign Stocks
          </>
        );
      case "tech_stocks":
        return (
          <>
            Tech Stocks
          </>
        );
      case "nigerian_bonds":
        return (
          <>
            Nigerian Bonds
          </>
        );
      case "emerging_stocks":
        return (
          <>
            Emerging Stocks
          </>
        );
      case "foreign_bonds":
        return (
          <>
            Foreign Bonds
          </>
        );
      case "commodities":
        return (
          <>
            Commodities
          </>
        );
       
      default:
        return "";
    }
  };


  const [score, setScore] = useState([]);
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
    axios.get("https://risk-score.onrender.com/api").then((res) => {
      setScore(res.data.data);
      console.log(res.data.data);
    }, []);
  });

  useEffect(() => {
    // Function to update the bar chart data
    const updateBarChartData = () => {
      if (score.length > 0) {
        const selectedData = score[rangeValue];
        const labels = Object.keys(selectedData).filter(
          (key) =>
            key !== "_id" && key !== "risk_score" && selectedData[key] !== 0
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
      }
    };

    updateBarChartData();
  }, [rangeValue, score]);

  const showRecommendation = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

   const [expandedRiskPoints, setExpandedRiskPoints] = useState([]);

  const toggleRiskPointExpansion = (riskPoint) => {
    if (expandedRiskPoints.includes(riskPoint)) {
      setExpandedRiskPoints(
        expandedRiskPoints.filter((point) => point !== riskPoint)
      );
    } else {
      setExpandedRiskPoints([...expandedRiskPoints, riskPoint]);
    }
  };

  return (
    <div className="pt-9 pb-5 text-center ">
      <h1 className="text-3xl font-bold">Sample Portfolio</h1>
      <p className="mb-5">
        Slide to see recommendations based on your risk factor
      </p>
      <div className="  justify-between w-10/12  mx-auto">
        <div className="main_work_section flex-grow flex-wrap-reverse gap-4   justify-center flex md:justify-between">
          <div className="w-[35rem] font-bold">
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
              <ul className="flex flex-wrap font-medium gap-2 mt-4">
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
            data-aos="fade-down"
            className="flex md:gap-6 gap-6 flex-col justify-between "
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

        {showPopup && (
          <div className=" fixed inset-0 flex items-center justify-center  z-[50000]">
            <div
              className="fixed inset-0 bg-black opacity-50 cursor-pointer"
              onClick={closePopup}
            ></div>
            <div className="fixed bg-white overflow-y-scroll p-8 w-9/12 h-[80vh] rounded-lg shadow-lg z-50">
              <button
                onClick={closePopup}
                className="float-right bg-amber-500 text-white px-2 py-2 rounded hover:bg-amber-700"
              >
                <Close />
              </button>
              <div className=" w-10/12 text-left mx-auto">
                <h2 className="text-4xl text-center font-bold mb-4">
                  You're{" "}
                  <span className="text-slate-600">
                    {recommendations[rangeValue].title}
                  </span>
                </h2>
                <p className="">{recommendations[rangeValue].text}</p>
                <p className="my-3">{recommendations[rangeValue].text2}</p>
                <h3 className="font-bold text-2xl mt-11 text-center">
                  Here’s a diversified portfolio for a{" "}
                  <span className="text-slate-600">
                    {recommendations[rangeValue].title}
                  </span>{" "}
                  investor:
                </h3>
                <p className="text-center md:w-9/12 m-auto">
                  Your answers determined the mix of investments that work to
                  deliver the highest return for your comfort zone for risk and
                  investing preferences.
                </p>
              </div>
              {score.length > 0 && (
                <div className="w-full mt-5">
                  {Object.keys(score[rangeValue]).map((key) => {
                    const value = score[rangeValue][key];
                    if (key !== "_id" && key !== "risk_score" && value !== 0) {
                      const isExpanded = expandedRiskPoints.includes(key);
                      return (
                        <div
                          key={key._id}
                          className="border border-gray-300 p-3 mb-3 cursor-pointer"
                        >
                          <div
                            onClick={() => toggleRiskPointExpansion(key)}
                            className="flex justify-between"
                          >
                            <div className="font-bold text-[18px]">
                              <span className="text-amber-500">{value}% </span>
                              {getHeading(key)}
                            </div>
                            <div>
                              {isExpanded ? (
                                <ArrowDropUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </div>
                          </div>
                          {isExpanded && (
                            <p data-aos="fade-up" className="mt-3 text-justify">
                              {getRiskPointText(key)}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section3;
