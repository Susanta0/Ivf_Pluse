import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Slider, styled, createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import { AuthContext } from "../Context/ContextApi";


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 340,    
      tablet: 640,  
      laptop: 1024,  
      desktop: 1280,
    },
  },
});

// Custom Slider with bold line and initial white color
const CustomSlider = styled(Slider)({
  color: "#F48265", // Active color
  height: 8, // Makes the slider line bold
  "& .MuiSlider-rail": {
    backgroundColor: "#EDEEF1", // Initial line color
    opacity: 1, // Makes the rail fully visible
    height: 8, // Bold rail
  },
  "& .MuiSlider-track": {
    backgroundColor: "#F48265", // Active track color
    height: 9, // Bold track
  },
  "& .MuiSlider-thumb": {
    backgroundColor: "#F48265", // Thumb color
    width: 24, // Thumb size
    height: 24, // Thumb size
    border: "2px solid white", // Thumb border
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#535353", // Mark color
    width: 5.77, // Mark size
    height: 5.77, // Mark size
    borderRadius: "17.3px",
  },
  "& .MuiSlider-markActive": {
    backgroundColor: "#F48265", // Active mark color
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: "#F48265",
    height:33,
    width:36,
    borderRadius:5.54,
    fontSize:"16px"
    
  },
});


const Home = () => {
  const [ageRange, setAgeRange] = useState("");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [icsiProcedure, setIcsiProcedure] = useState("");
  const [pgtTesting, setPgtTesting] = useState("");
  const [medicalConditions, setMedicalConditions] = useState([]);

   // Use media queries to dynamically determine marks
   const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("laptop"));
   const marks = isMobileOrTablet ? 11 : 5; // 11 for mobile/tablet, 5 for laptop/desktop
  
  const {
    storeData: { status },
    collectData,
  } = useContext(AuthContext);

  // Handle age range selection
  const handleAgeRangeChange = (e) => {
    setAgeRange(e.target.value);
  };

  // Handle ICSI procedure selection
  const handleIcsiProcedureChange = (e) => {
    setIcsiProcedure(e.target.value);
  };

  const handlePgtTestingChange = (event) => {
    setPgtTesting(event.target.value);
  };

  // Handle medical conditions
  const handleMedicalConditionChange = (e) => {
    const condition = e.target.value;
    setMedicalConditions((prev) =>
      e.target.checked
        ? [...prev, condition]
        : prev.filter((c) => c !== condition)
    );
  };

  // Calculate random percentage using all inputs
  const calculatePercentage = () => {
    if (
      !ageRange ||
      !icsiProcedure ||
      medicalConditions.length === 0 ||
      !pgtTesting
    ) {
      alert("Please fill all the required fields.");
      return;
    }

    // Example: Add logic based on inputs
    const basePercentage = Math.floor(Math.random() * (95 - 10 + 1)) + 10; // Random number between 10 and 95
    const ageModifier = ageRange === "Under 30" ? 10 : 0; // Example modifier
    const cyclesModifier = ivfCycles * 2; // Example modifier
    const conditionModifier = medicalConditions.length * -2; // Example modifier
    const pgtModifier = pgtTesting === "Yes" ? 5 : 0;

    const result =
      basePercentage +
      ageModifier +
      cyclesModifier +
      conditionModifier +
      pgtModifier;
    collectData(Math.max(10, Math.min(95, result)));
  };

  if (status) {
    return <Navigate to="/result" />;
  }
  return (
    <>
      {/* calculate all things */}
      <div className="flex laptop:flex-col laptop:items-center w-full laptop:justify-center
      mobile:flex-col
      mobile:px-[20px]
      ">
        <p className="font-semibold laptop:text-[28px] mobile:text-[16px] text-[#1E231E] laptop:pt-6 mobile:pt-[20px]">
          Which age range applies to you?
        </p>

        <div className="laptop:w-[714px] grid laptop:grid-cols-3 mobile:grid-cols-1 laptop:gap-[20px] mobile:gap-[10px] laptop:mt-8 mobile:mt-4">
          {[
            "Under 30",
            "Between 30-34",
            "Between 35-37",
            "Between 38-40",
            "Between 41-43",
            "Above 43",
          ].map((range) => (
            <div
              key={range}
              className="flex items-center laptop:justify-center mobile:justify-start gap-[12px] laptop:ml-0 mobile:ml-[2px]"
            >
              <input
                className="radio-input laptop:h-[24px] laptop:w-[24px] mobile:h-[18px] mobile:w-[18px] rounded-full"
                type="radio"
                name="ageRange"
                value={range}
                onChange={handleAgeRangeChange}
              />

              <span className="text font-[400] laptop:text-[20px] mobile:text-[14px] text-[#1E231E] opacity-[80%]">
                {range}
              </span>
            </div>
          ))}
        </div>

        {/* IVF Cycles */}
        <p className="font-semibold laptop:text-[28px] mobile:text-[16px] text-[#1E231E] laptop:pt-10 mobile:pt-5">
          Number of IVF Cycles?
        </p>
        <ThemeProvider theme={theme}>

        <Box 
        sx={{
          width: {
            mobile: 332,
            // tablet: 332,
            laptop: 372,
            desktop: 372,
          },
          
          paddingRight:"20px"
        }}
        className="laptop:mt-10 mobile:mt-7"
        >
          
          <CustomSlider
            className=""
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={1}
            marks={Array.from({ length: marks }, (_, i) => ({
              value: i + 1,
              
            }))}
            min={1}
            max={marks}
            value={ivfCycles}
            onChange={(e, value) => setIvfCycles(value)}
            
            
            />
        </Box>
            </ThemeProvider>
        {/* ICSI Procedure */}
        <p className="font-bold laptop:text-[28px] mobile:text-[16px] text-[#1E231E] laptop:mt-10 mobile:mt-2 ">
          Have you undergone these procedures before?
        </p>

        <div className="flex laptop:flex laptop:items-center mobile:block laptop:gap-[80px] mobile:gap-[10px] laptop:mt-6 mobile:mt-1">
          <div className="flex items-center gap-[25px]">
            <span className="font-semibold laptop:text-[20px] laptop:w-full mobile:w-[108px] mobile:text-[14px] text-[#1E231E]">
              ICSI Procedure:
            </span>
            <div className="flex items-center gap-[18px]">
              {["Yes", "No"].map((option) => (
                <div key={option} className="flex items-center gap-[12px]">
                  <input
                    className="radio-input laptop:w-[24px] laptop:h-[24px] mobile:w-[18px] mobile:h-[18px] rounded-full"
                    type="radio"
                    name="icsiProcedure"
                    value={option}
                    checked={icsiProcedure === option}
                    onChange={handleIcsiProcedureChange}
                  />
                  <span className="text font-[400] text-[20px] opacity-[80%]">{option}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[25px]">
            <span className="font-semibold laptop:text-[20px] laptop:w-full mobile:w-[108px] mobile:text-[14px] text-[#1E231E]">
              PGT Testing:
            </span>
            <div className="flex items-center gap-[18px]">
              {["Yes", "No"].map((option) => (
                <div key={option} className="flex items-center gap-[12px]">
                  <input
                    className="radio-input laptop:w-[24px] laptop:h-[24px] mobile:w-[18px] mobile:h-[18px] rounded-full"
                    type="radio"
                    name="pgtTesting"
                    value={option}
                    checked={pgtTesting === option}
                    onChange={handlePgtTestingChange}
                  />
                  <span className="text font-[400] text-[20px] opacity-[80%]">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-bold laptop:text-[28px] mobile:text-[16px] text-[#1E231E] laptop:mt-10 mobile:mt-5">
          Do you have any of these medical conditions?
        </p>

        <div className="flex laptop:flex-row laptop:items-center laptop:gap-[48px] mobile:gap-[10px] mobile:flex-col laptop:mt-6 mobile:mt-4">
          {[
            "PCOS",
            "Endometriosis",
            "Low Ovarian Reserve",
            "Male Factor Infertility",
          ].map((condition) => (
            <div key={condition} className="flex items-center laptop:gap-[12px] mobile:gap-[10px]">
              <input
                className="checkbox laptop:h-[22px] laptop:w-[22px] mobile:h-[16.5px] mobile:w-[16.5px]"
                type="checkbox"
                value={condition}
                onChange={handleMedicalConditionChange}
              />
              <span className="text laptop:text-[24px] mobile:text-[14px] font-[400] opacity-[80%] text-[#1E231E]">
                {condition}
              </span>
            </div>
          ))}
        </div>
        <button
        
          onClick={calculatePercentage}
          className="w-[147px] h-[47px] bg-[#D75555] rounded-[6px] text-[16px] font-medium text-[#FFFFFF] m-auto laptop:bottom-22 desktop:bottom-20 mobile:mt-10
           mobile:fixed mobile:bottom-6 mobile:left-1/2 mobile:transform mobile:-translate-x-1/2 mobile:z-10  
         
          "
        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default Home;
