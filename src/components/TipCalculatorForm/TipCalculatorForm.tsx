import * as React from "react";
import NumberInput from "../NumberInput";
import TipGroup from "../TipGroup";

function TipCalculatorForm() {
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="py-8 px-8 lg:ps-12 lg:py-11 lg:pe-0 flex flex-col gap-8 lg:gap-10"
    >
      <NumberInput label="bill" icon="dollar" />
      <fieldset className="p-0 border-0">
        <legend>Select Tip %</legend>
        <TipGroup />
      </fieldset>
      <NumberInput label="Number of People" icon="person" />
      <button className="sr-only">Submit</button>
    </form>
  );
}

export default TipCalculatorForm;
