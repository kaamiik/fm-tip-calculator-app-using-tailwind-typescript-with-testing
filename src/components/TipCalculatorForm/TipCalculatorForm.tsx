import NumberInput from '../NumberInput';
import TipGroup from '../TipGroup';
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  FieldErrors,
} from 'react-hook-form';
import { TipForm } from '../../schema/tip';
import Button from '../Button';

function TipCalculatorForm({
  register,
  setValue,
  watch,
  errors,
  ...delegated
}: React.FormHTMLAttributes<HTMLFormElement> & {
  register: UseFormRegister<TipForm>;
  setValue: UseFormSetValue<TipForm>;
  watch: UseFormWatch<TipForm>;
  errors: FieldErrors<TipForm>;
}) {
  return (
    <form
      {...delegated}
      noValidate
      action=""
      className="flex flex-col gap-8 px-8 py-8 lg:gap-10 lg:py-11 lg:ps-12 lg:pe-0"
    >
      <NumberInput
        label="bill"
        icon="dollar"
        {...register('bill')}
        error={errors.bill}
      />

      <TipGroup
        register={register}
        setValue={setValue}
        watch={watch}
        errorRadio={errors.tipRadio}
        errorCustom={errors.tipCustom}
      />

      <NumberInput
        label="Number of People"
        icon="person"
        {...register('peopleNum')}
        error={errors.peopleNum}
      />
      <Button className="focus-visible:outline-very-dark-cyan">
        Calculate
      </Button>
    </form>
  );
}

export default TipCalculatorForm;
