
// export default QuestionAnalysis;
import React from 'react';

const QuestionAnalysis = ({ correctAnswers }) => {
  // Calculate the percentage of correct answers
  const percentage = (correctAnswers / 15) * 100;

  return (
    <div className="lg:w-1/3 mx-auto mt-[16px] relative">
      <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col">
        <div className="flex justify-end mb-3">
          <h2 className="text-blue-500 text-lg title-font font-extrabold">{correctAnswers}/15</h2>
        </div>
        <div className="flex justify-start mb-3 mt-[-39px]">
          <h2 className="text-gray-900 text-lg title-font font-extrabold">Question Analysis</h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base">
            You have scored {correctAnswers} out of 15. However, you still have room for improvement.
          </p>
        </div>
        {/* Progress Ring */}
        <svg className="w-35 h-40 mx-auto mt-[30px]" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="transparent"
            stroke="#007BFF"
            strokeWidth="4"
            strokeOpacity="0.2" // Transparent blue for the background ring
            transform="rotate(-90 18 18)"
          />
          <circle
            className="ring"
            cx="18"
            cy="18"
            r="16"
            fill="transparent"
            stroke="#007BFF" // Blue color for the progress ring
            strokeWidth="4" // Increased thickness
            strokeDasharray={`${percentage}, 100`}
            transform="rotate(-90 18 18)"
          />
        </svg>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
