import { GrCircleInformation } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";

const Score = () => {
  return (
    <div className="w-full xl:w-[28%] bg-[#f6f7fc] p-4 shadow-sm shadow-gray-300 border border-gray-300 rounded-md flex flex-col items-center gap-y-8">
      <div className="flex flex-col items-center">
        <img src="/result.png" alt="Result" className="w-[150px]" />
        <p className="text-[#6a6fc3] font-semibold text-2xl">Your Result!</p>
        <p className="text-gray-500 text-sm">
          All your insights & details in one page
        </p>
      </div>

      <div className="bg-white p-4 shadow-sm shadow-gray-300 border border-gray-300 rounded-lg w-full flex flex-col gap-y-5">
        <div className="flex p-2 justify-between items-center bg-[#f7f6fc] rounded-lg">
          <div className="flex items-center gap-x-2.5">
            <div className="bg-[#dbd8f7] p-2 rounded-sm">
              <MdEventAvailable color="black" size={20} />
            </div>

            <div className="flex flex-col">
              <div className="bg-[#5a5fbc] px-1.5 py-0.5 rounded-full">
                <p className="text-[8px] text-white">YOU&apos;VE PASSED</p>
              </div>
              <p className="text-gray-500 text-xs">
                <span className="font-bold text-black text-lg">136</span> / 240
              </p>
            </div>
          </div>

          <div className="flex gap-x-2 items-center">
            <div className="w-0.5 h-8 bg-gray-300 rounded-lg" />
            <div className="flex flex-col gap-y-1">
              <div className="bg-[#059794] p-1 rounded-md flex items-center justify-center">
                <p className="text-white text-xs">76%</p>
              </div>
              <p className="text-[8px] text-[#41afae] font-extrabold">
                ACCURACY
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#f7f6fc] rounded-lg">
          <div className="flex items-center gap-x-2.5 border-b-2 border-gray-300 pb-4">
            <img
              src="/user.png"
              alt="Person"
              className="size-10 rounded-sm border-2 border-[#dddaf7]"
            />

            <div className="flex flex-col">
              <p className="text-[10px] text-[#8285cc] font-bold">Top Score</p>
              <p className="text-gray-500 text-xs">
                <span className="font-bold text-black text-lg">230</span> / 240
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2.5">
            <p className="text-gray-500 text-xs">
              By <span className="font-bold text-black">Parth Akotkar</span>
            </p>
            <div className="bg-[#059794] py-1 px-2 rounded-full flex items-center justify-center">
              <p className="text-white text-[10px]">92% ACCURACY</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Improve your Marks</p>
          <p className="text-gray-500 text-xs font-bold">
            Improve your score by practicing more
          </p>
        </div>

        <button className="bg-[#5a5fbc] text-white py-1.5 rounded-lg">
          Practice more
        </button>
      </div>

      <div className="bg-white p-4 shadow-sm shadow-gray-300 border border-gray-300 rounded-lg w-full flex flex-col items-center gap-y-5">
        <div className="flex flex-col gap-y-1">
          <p className="font-bold text-xl">Revisit Paper</p>
          <p className="text-gray-500 text-sm font-semibold">
            Challenge your friends by simply sharing a link to this test
          </p>
        </div>

        <button className="bg-[#5a5fbc] text-white py-1.5 rounded-lg w-[60%] flex gap-x-1.5 items-center justify-center">
          <TbFileImport color="white" size={18} />
          Visit
        </button>

        <div className="flex gap-x-2">
          <GrCircleInformation className="text-gray-500" size={24} />
          <p className="text-gray-500 text-sm">
            Information for how to upload your handwritten material in given
          </p>
        </div>
      </div>
    </div>
  );
};

export default Score;
