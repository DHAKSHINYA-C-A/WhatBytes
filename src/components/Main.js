
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Syllabus from './Syllabus';
import QuestionAnalysis from './QuestionAnalysis';
function Main() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [rank, setRank] = useState(4);
  const [percentile, setPercentile] = useState(90);
  const [correctAnswers, setCorrectAnswers] = useState(10);

  const handleUpdate = () => {
    setShowUpdateForm(true);
  };

  const handleCancel = () => {
    setShowUpdateForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUpdateForm(false);
  };

  const data = {
    labels: ['0', '25', '50', '75', '100'],
    datasets: [
      {
        label: 'Percentile',
        data: [0, 20, 80, 45, 10],
        borderColor: 'rgba(0, 0, 128, 200)', // Dark blue color
        borderDash: [5, 5], // Dashed line
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Marks',
        },
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        title: {
          display: false,
         
        },
        min: 0,
        max: 100,
        ticks: {
          display: false, // Hide the y-axis values
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const numberOfStudents = [10, 20, 30, 40, 50, 60, 70]; // example data
            return `Percentile: ${context.parsed.y}, Students: ${numberOfStudents[index]}`;
          },
        },
      },
    },
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-0 mt-[-228px] flex flex-wrap">
        <div className="w-full mb-0">
          <h1 className="text--1xl text-gray-900 ml-64">Skill Test</h1>
        </div>
        <div className="p-4 lg:w-1/2 md:w-full mx-auto ml-56 relative">
          <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col relative">
            <div className="w-12 h-12 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center flex-shrink-0">
              <img src="https://res.cloudinary.com/duaotkbof/image/upload/v1717985776/dj9hegy4ijnfd7ofw5h2.png" alt="Logo" className="w-24 h-16 mt-4" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font  font-extrabold">Hyper Text Markup Language</h2>
              <p className="leading-relaxed text-base">Questions: 08 | Duration: 15mins | Submitted on 15th June 2021</p>
            </div>
            <button onClick={handleUpdate} className="absolute top-10 right-4 bg-blue-900 text-white font-bold py-2 px-4 rounded">Update</button>
          </div>
        </div>
        <div className="p-4 lg:w-1/2 md:w-full mx-auto mt-0 ml-56 relative">
          <h2 className="text-gray-900 text-lg title-font font-extrabold mb-3">Quick Statistics</h2>
          <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col relative">
            <div className="w-full sm:w-1/3 sm:pr-4 ">
              <div className="flex items-center mb-2 pb-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUA6jlTfmy8j5ar3lzs7G4Q6FE5qIP0YGdszPzVgfZv4lBu7ddrbxxfcLYlg5D_nKicE&usqp=CAU" alt="Logo" className="w-12 h-12 sm:mr-4" />
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-extrabold">{rank}</h2>
                  <p className="leading-relaxed text-base">YOUR RANK</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3 sm:pr-4">
              <div className="flex items-center border-l-2 border-gray-300 pl-4 mb-2 pb-2">
                <img src="https://as1.ftcdn.net/v2/jpg/02/17/85/64/1000_F_217856461_WoSlnr2dgG28fX1WTnwtxpJ5cYQ1H0ne.jpg" alt="Logo" className="w-12 h-12 sm:mr-4" />
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-extrabold ">{percentile}%</h2>
                  <p className="leading-relaxed text-base">PERCENTILE</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex items-center border-l-2 border-gray-300 pl-4 mb-2 pb-2">
                <img src="https://img.freepik.com/premium-vector/vector-green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_488400-339.jpg" alt="Logo" className="w-12 h-12 sm:mr-4" />
                <div>
                  <h2 className="text-gray-900 text-lg title-font font-extrabold">{correctAnswers}/15</h2>
                  <p className="leading-relaxed text-base">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Syllabus />
       
        <div className="p-4 lg:w-1/2 mt-[-68px] md:w-full mx-auto  ml-56 relative">
          <h2 className="text-gray-900 text-lg title-font font-extrabold mb-3">Comparison Graph</h2>
          <p className="text-base leading-relaxed">You have scored {percentile}% which is {percentile >= 72 ? 'higher' : 'lower'} than the</p>
          <p className="text-base leading-relaxed">average percentile 72% of all the engineers who took this assessment.</p>
          <Line data={data} options={options} />
        </div>
        <QuestionAnalysis correctAnswers={correctAnswers} />
      </div>

      {showUpdateForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-140 relative">
            <img 
              src="https://res.cloudinary.com/duaotkbof/image/upload/v1717985776/dj9hegy4ijnfd7ofw5h2.png" 
              alt="Top Right Logo" 
              className="absolute top-4 right-4 w-12 h-12" 
            /> {/* Added top right corner logo */}
            <h2 className="text-gray-900 text-lg font-bold mb-4">Update Scores</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <img 
                  src="https://www.pngitem.com/pimgs/m/28-283091_icons-1-circle-circle-hd-png-download.png"                  alt="Label Logo"
                  className="mr-2 w-6 h-6"
                /> {/* Added logo to the left of the label */}
                <label className="text-gray-700 font-bold w-72 mr-2" htmlFor="rank">Update Your Rank:</label>
                <input
                  type="number"
                  id="rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  className="border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-24"
                />
              </div>
              <div className="mb-4 flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sFo5NNFfcQn8VIdPfY1rVtwM1KpHQ4h0wqcsTWZNI-BKdEfM_8D6Pov8E_zZCdzX_Ng&usqp=CAU"
                  alt="Label Logo"
                  className="mr-2 w-6 h-6"
                /> {/* Added logo to the left of the label */}
                <label className="text-gray-700 font-bold w-72 mr-2" htmlFor="percentile">Update Your Percentile:</label>
                <input
                  type="number"
                  id="percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                  className="border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-24"
                />
              </div>
              <div className="mb-4 flex items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmadyeZs5NcPRJZd_FfAPkiPmrJPAHHmJqxh9hCH8MdWtguxGFOjs_in8q8EQzSA8VtE&usqp=CAU"
                  alt="Label Logo"
                  className="mr-2 w-6 h-6"
                /> {/* Added logo to the left of the label */}
                <label className="text-gray-700 font-bold w-72 mr-2" htmlFor="correctAnswers">Update your Correct Score (out of 15):</label>
                <input
                  type="number"
                  id="correctAnswers"
                  value={correctAnswers}
                  onChange={(e) => setCorrectAnswers(e.target.value)}
                  className="border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 w-24"
                />
              </div>
              <div className="pt-6 flex justify-end space-x-2">
                <button type="button" onClick={handleCancel} className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-900">Cancel</button>
                <button type="submit" className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-900">Save</button>
              </div>
            </form>
          </div>
         
        </div>
      )}
    </section>
  );
}

export default Main;




