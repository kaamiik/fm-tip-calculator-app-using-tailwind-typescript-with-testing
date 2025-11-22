import RadioTip from '../RadioTip';
import CustomTip from '../CustomTip';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldError,
} from 'react-hook-form';
import { TipForm } from '../../schema/tip';

function TipGroup({
  register,
  setValue,
  watch,
  errorRadio,
  errorCustom,
}: {
  register: UseFormRegister<TipForm>;
  setValue: UseFormSetValue<TipForm>;
  watch: UseFormWatch<TipForm>;
  errorRadio?: FieldError;
  errorCustom?: FieldError;
}) {
  const tipRadio = watch('tipRadio') || '';
  const tipCustom = watch('tipCustom') || '';

  const tipAmounts = ['5', '10', '15', '25', '50'];

  function handleTipChange(value: string) {
    setValue('tipRadio', value, { shouldValidate: true });
    setValue('tipCustom', '');
  }

  function handleCustomTipChange(value: string) {
    setValue('tipCustom', value);
    setValue('tipRadio', '');
  }

  const error = errorRadio || errorCustom;

  return (
    <fieldset className="border-0 p-0">
      <legend>Select Tip %</legend>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {tipAmounts.map((tipAmount, index) => (
          <RadioTip
            key={index}
            {...register('tipRadio')}
            label={`${tipAmount}%`}
            value={tipAmount}
            checked={tipRadio === tipAmount}
            onChange={(e) => handleTipChange(e.target.value)}
            error={errorRadio}
          />
        ))}
        <CustomTip
          key="custom"
          {...register('tipCustom')}
          value={tipCustom}
          onChange={(e) => handleCustomTipChange(e.target.value)}
          error={errorCustom}
        />
      </div>
      {error && (
        <span className="text-red text-xs md:text-base">{error.message}</span>
      )}
    </fieldset>
  );
}

export default TipGroup;
