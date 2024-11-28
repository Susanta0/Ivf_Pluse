import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextApi";
import line from "/Group 1000002382.png";
import line2 from "/Group 1000002391.png";
import couple from "/black-white-portrait-woman-expecting-baby (3).png";

const Result = () => {
  const {
    storeData: { store },
  } = useContext(AuthContext);
  const radius = 146; // Radius of the circle
  const center = 146; // Center of the circle
  const circumference = 2 * Math.PI * radius; // Full circumference
  const angle = (store / 100) * 360; // Convert store value to angle (0–360)

  // Convert angle to radians for calculations
  const radians = (angle - 90) * (Math.PI / 180); // Offset by -90° to start at top
  const x = center + radius * Math.cos(radians); // X-coordinate of the end point
  const y = center + radius * Math.sin(radians); // Y-coordinate of the end point

  // Large-arc-flag determines if the arc should be > 180°
  const largeArcFlag = store > 50 ? 1 : 0;

  // SVG Path
  const pathD = `
    M ${center},${center - radius}
    A ${radius},${radius} 0 ${largeArcFlag} 1 ${x},${y}
  `;
  return (
    <>
      <div className=" mobile:w-full mobile:h-[800px] bg-[#303030]">
        <div className="flex items-center gap-x-6 laptop:mt-16 mobile:mt-6">
          <img src={line} alt="line_logo" className="mobile:hidden laptop:flex" />
          <img src={line2} alt="line_logo" className="mobile:flex laptop:hidden"/>

          <p className="font-medium laptop:text-[44px] mobile:text-[16px] text-[#FFFFFF]">
            Your estimated IVF Success Rate is
          </p>
        </div>

        <div className="flex laptop:items-center mobile:items-center mobile:flex-col mobile:gap-20 laptop:mt-0 mobile:mt-10">
          <div className="">
            <svg
              className="laptop:absolute laptop:top-[406px] laptop:left-[316px] rounded-full mobile:w-[188px] mobile:h-[188px]"
              width="293.09"
              height="293.09"
              viewBox="0 0 293.09 293.09"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="#5BD489"
                strokeWidth="80"
                opacity="30%"
              />

              <path
                d={pathD}
                fill="none"
                stroke="#5BD489"
                strokeWidth="80"
                // strokeLinecap=
              />
              <rect
                x="13.7%"
                y="13.7%"
                width="212" // Adjust width to fit the text
                height="212" // Adjust height to fit the text
                transform="translate(-50%, -50%)"
                fill="#032706"
                rx="100" // Optional: rounded corners
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="74px"
                fontWeight="medium"
                className=""
              >
                {store}%
              </text>
            </svg>

            <p className="font-medium text-[24px] text-[#FFFFFF] laptop:absolute laptop:top-[733px] laptop:left-[369px] text-center laptop:mt-0 mobile:mt-4">
              With 1 IVF Cycle
            </p>
          </div>

          {/* couple image */}
          <div className="">
            <span className="laptop:h-[410px] laptop:w-[410px] mobile:h-[197px] mobile:w-[197px] bg-[#3E9E51] blur-[100px] laptop:absolute laptop:top-[255px] laptop:left-[1038px] mobile:absolute mobile:top-[561px] mobile:left-[107px]"></span>
            <img
              className="object-contain laptop:absolute laptop:left-[608px] laptop:top-[239px]
              "
              src={couple}
              alt="couple"
            />
          </div>
        </div>



      <div className="w-full h-[96px] absolute flex justify-center items-center rounded-bl-2xl rounded-br-2xl bg-[#FFFFFF33]">

      <button
        
          className="w-[257px] h-[52px] bg-[#D75555] rounded-[8px] text-[16px] font-medium text-[#FFFFFF]
          "
        >
          Start private consultation&nbsp; →
        </button>
      </div>


      </div>

    </>
  );
};

export default Result;
