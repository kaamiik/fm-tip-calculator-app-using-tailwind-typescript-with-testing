import * as React from "react";

function Results() {
  return (
    <div className="px-8 pb-8 lg:py-8 lg:ps-0 lg:pe-8 lg:grid">
      <div className="bg-very-dark-cyan text-white px-6 pt-10 pb-6 lg:p-10 rounded-2xl flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="flex flex-col">
            Tip Amount
            <span className="text-xs text-grayish-cyan">/ person</span>
          </p>
          <span className="text-[2rem] lg:text-5xl text-cyan tracking-[-0.7px]">
            $0.00
          </span>
        </div>
        <div className="mt-5 lg:mt-6 flex items-center justify-between">
          <p className="flex flex-col">
            Total
            <span className="text-xs text-grayish-cyan">/ person</span>
          </p>
          <span className="text-[2rem] lg:text-5xl text-cyan tracking-[-0.7px]">
            $0.00
          </span>
        </div>
        <button
          type="reset"
          className="w-full py-2 px-8 rounded-md text-very-dark-cyan bg-cyan text-xl uppercase cursor-pointer hover:bg-cyan-200 mt-auto"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Results;
