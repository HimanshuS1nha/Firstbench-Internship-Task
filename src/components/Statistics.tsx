import { Fragment } from "react";
import { CiSquareChevDown } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import { LuClockAlert } from "react-icons/lu";
import { MdOutlineShowChart } from "react-icons/md";
import { RiSparklingLine } from "react-icons/ri";
import { IoMdGitCompare } from "react-icons/io";
import { FiGitCommit } from "react-icons/fi";

// @ts-expect-error No types exist for this library
import CanvasJSReact from "@canvasjs/react-charts";

const Statistics = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    dataPointWidth: 15,
    dataPointRadius: 20,
    title: {
      text: "",
    },
    axisX: {
      title: "Slots",
    },
    axisY: {
      title: "Accuracy",
      suffix: "%",
      interval: 25,
      minimum: 0,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "1", y: 90, color: "#8385d6" },
          { label: "2", y: 45, color: "#8385d6" },
          { label: "3", y: 35, color: "#8385d6" },
          { label: "4", y: 60, color: "#8385d6" },
          { label: "5", y: 57, color: "#8385d6" },
          { label: "6", y: 47, color: "#8385d6" },
          { label: "7", y: 64, color: "#8385d6" },
        ],
      },
    ],
  };
  return (
    <div className="w-full xl:w-[70%] flex flex-col gap-y-6">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-6">
        {Array.from({ length: 3 }, (_, i) => i).map((item) => {
          return (
            <div
              key={item}
              className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[32%] h-[270px]"
            >
              <div className="flex gap-x-1.5 items-center">
                <CiSquareChevDown className="text-gray-500" size={20} />
                <p className="text-gray-500 font-semibold">Compare Accuracy</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-6">
        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[60%] lg:w-[24%] flex flex-col gap-y-4 h-[202px]">
          <div className="flex gap-x-1.5 items-center">
            <MdOutlineShowChart className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Improvements</p>
          </div>

          <p className="text-sm font-semibold">Subject Understanding</p>

          <div className="flex gap-1.5 items-center flex-wrap">
            <div className="bg-[#1cb9b4] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Geography</p>
            </div>
            <div className="bg-[#eab308] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Politics</p>
            </div>
            <div className="bg-[#1cb9b4] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Current Affairs</p>
            </div>
            <div className="bg-[#b91c1c] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">General Studies</p>
            </div>
            <div className="bg-[#1cb9b4] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Mathematics</p>
            </div>
            <div className="bg-[#c5c9cf] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Social Studies</p>
            </div>
            <div className="bg-[#b91c1c] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">English Literature</p>
            </div>
            <div className="bg-[#eab308] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Indian History</p>
            </div>
            <div className="bg-[#1cb9b4] rounded-full px-1.5 py-1">
              <p className="text-white text-[9px]">Economics</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[60%] lg:w-[24%] flex flex-col gap-y-4 h-[202px]">
          <div className="flex gap-x-1.5 items-center">
            <LuClockAlert className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Response Time</p>
          </div>

          <div className="bg-[#5a5fbc] px-2 py-1 rounded-md w-fit">
            <p className="text-[10px] text-white">Std Time - 2 min</p>
          </div>

          <div className="bg-[#f2f1fa] p-2.5 rounded-lg flex justify-between items-center border-2 border-dashed border-[#5a5fbc]">
            <p className="text-gray-500 text-sm">
              <span className="text-[#1ebab5] text-xl font-bold">60</span> % Ans
              Took
            </p>

            <div className="flex gap-x-1.5 items-end">
              <FaArrowUp color="red" size={22} />
              <p className="text-[#5b60bc] text-xs">
                <span className="font-bold text-lg">2</span>min
              </p>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 pt-1.5">
            <p className="text-center font-bold">
              You are <span className="text-red-600">slow</span>!
            </p>
          </div>
        </div>

        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[60%] lg:w-[24%] flex flex-col gap-y-2.5 h-[202px]">
          <div className="flex gap-x-1.5 items-center">
            <MdOutlineShowChart className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Approach Data</p>
          </div>

          <div className="p-1 flex gap-x-1.5 items-center border border-[#5a5fbc] rounded-md">
            <div className="bg-[#e3e1f5] px-1.5 py-0.5 rounded-md">
              <p className="text-[#6469c0] font-bold text-xs">25%</p>
            </div>
            <p className="font-bold text-xs">
              Based on <span className="text-[#6469c0]">Facts</span>
            </p>
          </div>
          <div className="p-1 flex gap-x-1.5 items-center border border-[#5a5fbc] rounded-md">
            <div className="bg-[#e3e1f5] px-1.5 py-0.5 rounded-md">
              <p className="text-[#6469c0] font-bold text-xs">32%</p>
            </div>
            <p className="font-bold text-xs">
              Based on <span className="text-[#6469c0]">Analysis</span>
            </p>
          </div>
          <div className="p-1 flex gap-x-1.5 items-center border border-[#5a5fbc] rounded-md">
            <div className="bg-[#e3e1f5] px-1.5 py-0.5 rounded-md">
              <p className="text-[#6469c0] font-bold text-xs">19%</p>
            </div>
            <p className="font-bold text-xs">
              Based on <span className="text-[#6469c0]">Elimination</span>
            </p>
          </div>
          <div className="p-1 flex gap-x-1.5 items-center border border-[#5a5fbc] rounded-md">
            <div className="bg-[#e3e1f5] px-1.5 py-0.5 rounded-md">
              <p className="text-[#6469c0] font-bold text-xs">24%</p>
            </div>
            <p className="font-bold text-xs">
              Based on <span className="text-[#6469c0]">Guess</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[60%] lg:w-[24%] flex flex-col gap-y-4 h-[202px]">
          <div className="flex gap-x-1.5 items-center">
            <RiSparklingLine className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Suggestions</p>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex flex-col gap-y-2.5 w-[30%]">
              <div className="bg-[#5a5fbc] py-1 px-1.5 rounded-md w-fit">
                <p className="text-white text-[9px]">Q. 1-12</p>
              </div>

              <div className="w-full bg-[#f2f1fa] flex items-center justify-center py-4 border-2 border-dashed border-[#5a5fbc] rounded-lg">
                <p className="font-bold">40sec</p>
              </div>

              <p className="text-[#87dad7] font-bold text-center">Easy</p>
            </div>
            <div className="flex flex-col gap-y-2.5 w-[30%]">
              <div className="bg-[#5a5fbc] py-1 px-1.5 rounded-md w-fit">
                <p className="text-white text-[9px]">Q. 12-32</p>
              </div>

              <div className="w-full bg-[#f2f1fa] flex items-center justify-center py-4 border-2 border-dashed border-[#5a5fbc] rounded-lg">
                <p className="font-bold">1.5min</p>
              </div>

              <p className="text-[#f2cf63] font-bold text-center">Medium</p>
            </div>
            <div className="flex flex-col gap-y-2.5 w-[30%]">
              <div className="bg-[#5a5fbc] py-1 px-1.5 rounded-md w-fit">
                <p className="text-white text-[9px]">Q. 32-40</p>
              </div>

              <div className="w-full bg-[#f2f1fa] flex items-center justify-center py-4 border-2 border-dashed border-[#5a5fbc] rounded-lg">
                <p className="font-bold">3min</p>
              </div>

              <p className="text-[#f2cf63] font-bold text-center">Hard</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-6">
        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[49%] h-[300px] flex flex-col gap-y-5">
          <div className="flex gap-x-1.5 items-center">
            <IoMdGitCompare className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Compare Accuracy</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="h-3 w-5 bg-[#abede9]" />
            <div className="bg-[#e0e2e5] px-1.5 py-1.5 rounded-md">
              <p className="text-xs text-[#9297a0] font-bold">10MIN</p>
            </div>
            <div className="h-3 w-8 bg-[#abede9]" />
            <div className="bg-[#1cb9b4] px-1.5 py-1.5 rounded-md">
              <p className="text-xs text-white font-bold">15MIN</p>
            </div>
            <div className="h-3 w-8 bg-[#abede9]" />
            <div className="bg-[#e0e2e5] px-1.5 py-1.5 rounded-md">
              <p className="text-xs text-[#9297a0] font-bold">30MIN</p>
            </div>
            <div className="h-3 w-8 bg-[#abede9]" />
            <div className="bg-[#e0e2e5] px-1.5 py-1.5 rounded-md">
              <p className="text-xs text-[#9297a0] font-bold">45MIN</p>
            </div>
            <div className="h-3 w-5 bg-[#abede9]" />
          </div>

          <CanvasJSReact.CanvasJSChart options={options} />
        </div>

        <div className="bg-white p-2.5 shadow-sm shadow-gray-300 border border-gray-300 rounded-xl w-full md:w-[49%] h-[300px] flex flex-col gap-y-3">
          <div className="flex gap-x-1.5 items-center">
            <FiGitCommit className="text-gray-500" size={20} />
            <p className="text-gray-500 font-semibold">Time Taken</p>
          </div>

          <div className="flex flex-col bg-[#f1f0fa] py-0.5 px-1.5 relative">
            <div className="flex gap-x-2">
              {Array.from({ length: 8 }, (_, i) => i).map((item) => {
                return (
                  <Fragment key={item}>
                    <div className="bg-[#6c70c3] w-1.5 h-5 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                  </Fragment>
                );
              })}
              <div className="bg-[#6c70c3] w-1.5 h-5" />
            </div>
            <div className="flex justify-between items-center z-10">
              <p className="text-[10px] font-bold">10</p>
              <p className="text-[10px] font-bold">20</p>
              <p className="text-[10px] font-bold">30</p>
              <p className="text-[10px] font-bold">40</p>
              <p className="text-[10px] font-bold">50</p>
              <p className="text-[10px] font-bold">60</p>
              <p className="text-[10px] font-bold">70</p>
              <p className="text-[10px] font-bold">80</p>
              <p className="text-[10px] font-bold">90</p>
            </div>

            <div className="flex flex-col mt-1 gap-y-1 rounded-md">
              <div className="h-3 w-[60%] bg-red-600" />
              <div className="h-3 w-[24%] bg-green-500" />
            </div>

            <div className="h-full w-2.5 bg-[#9598d4] absolute left-[24.5%]" />
          </div>

          <p className="text-gray-500 text-sm font-semibold">
            Lorem Ipsum is simple dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>

          <div className="flex flex-col bg-[#f1f0fa] py-0.5 px-1.5 relative">
            <div className="flex gap-x-2">
              {Array.from({ length: 8 }, (_, i) => i).map((item) => {
                return (
                  <Fragment key={item}>
                    <div className="bg-[#6c70c3] w-1.5 h-5 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                    <div className="bg-[#6c70c3] w-0.5 h-3 z-10" />
                  </Fragment>
                );
              })}
              <div className="bg-[#6c70c3] w-1.5 h-5" />
            </div>
            <div className="flex justify-between items-center z-10">
              <p className="text-[10px] font-bold">4</p>
              <p className="text-[10px] font-bold">3</p>
              <p className="text-[10px] font-bold">2</p>
              <p className="text-[10px] font-bold">1</p>
              <p className="text-[10px] font-bold">0</p>
              <p className="text-[10px] font-bold">1</p>
              <p className="text-[10px] font-bold">2</p>
              <p className="text-[10px] font-bold">3</p>
              <p className="text-[10px] font-bold">4</p>
            </div>

            <div className="flex mt-1 justify-center items-center rounded-md gap-x-2">
              <div className="h-3 w-[24%] bg-green-500" />
              <div className="h-3 w-[24%] bg-red-600" />
            </div>

            <div className="h-full w-2.5 bg-[#9598d4] absolute left-[48.5%]" />
          </div>

          <p className="text-gray-500 text-sm font-semibold">
            Lorem Ipsum is simple dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
