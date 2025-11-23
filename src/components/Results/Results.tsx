import { UseFormReset } from 'react-hook-form';
import { TipForm } from '../../schema/tip';
import Button from '../Button';

function Results({
  tipPerPerson,
  totalPerPerson,
  reset,
  disabled,
}: {
  tipPerPerson: string;
  totalPerPerson: string;
  reset: UseFormReset<TipForm>;
  disabled: boolean;
}) {
  return (
    <div className="px-8 pb-8 lg:grid lg:py-8 lg:ps-0 lg:pe-8">
      <div className="bg-very-dark-cyan shadow-tip flex flex-col gap-8 rounded-2xl px-6 pt-10 pb-6 text-white lg:p-10">
        <div
          className="flex items-center justify-between"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="flex flex-col">
            Tip Amount
            <span className="text-grayish-cyan text-xs">/ person</span>
          </p>
          <span className="text-cyan text-[2rem] tracking-[-0.7px] lg:text-5xl">
            {`$${tipPerPerson}`}
          </span>
        </div>
        <div
          className="mt-5 flex items-center justify-between lg:mt-6"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="flex flex-col">
            Total
            <span className="text-grayish-cyan text-xs">/ person</span>
          </p>
          <span className="text-cyan text-[2rem] tracking-[-0.7px] lg:text-5xl">
            {`$${totalPerPerson}`}
          </span>
        </div>
        <Button
          type="reset"
          disabled={disabled}
          onClick={() => reset()}
          className="focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Results;
