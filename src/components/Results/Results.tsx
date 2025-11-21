function Results() {
  return (
    <div className="px-8 pb-8 lg:grid lg:py-8 lg:ps-0 lg:pe-8">
      <div className="bg-very-dark-cyan shadow-tip flex flex-col gap-8 rounded-2xl px-6 pt-10 pb-6 text-white lg:p-10">
        <div className="flex items-center justify-between">
          <p className="flex flex-col">
            Tip Amount
            <span className="text-grayish-cyan text-xs">/ person</span>
          </p>
          <span className="text-cyan text-[2rem] tracking-[-0.7px] lg:text-5xl">
            $0.00
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between lg:mt-6">
          <p className="flex flex-col">
            Total
            <span className="text-grayish-cyan text-xs">/ person</span>
          </p>
          <span className="text-cyan text-[2rem] tracking-[-0.7px] lg:text-5xl">
            $0.00
          </span>
        </div>
        <button
          type="reset"
          disabled
          className="text-very-dark-cyan bg-cyan mt-auto w-full cursor-pointer rounded-md px-8 py-2 text-xl uppercase outline-0 focus-visible:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white enabled:hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Results;
