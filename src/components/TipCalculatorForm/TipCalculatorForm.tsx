import NumberInput from '../NumberInput';
import TipGroup from '../TipGroup';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tipFormSchema, TipForm } from '../../schema/tip';

function TipCalculatorForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TipForm>({
    resolver: zodResolver(tipFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      bill: '',
      peopleNum: '',
      tipRadio: '',
      tipCustom: '',
    },
  });

  function onSubmit(data: TipForm) {
    console.log('Form submitted successfully:', data);
    const finalTip = data.tipCustom || data.tipRadio;
    console.log('Tip percentage:', finalTip);
  }

  return (
    <form
      noValidate
      action=""
      onSubmit={handleSubmit(onSubmit)}
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
        error={errors.tipRadio}
      />

      <NumberInput
        label="Number of People"
        icon="person"
        {...register('peopleNum')}
        error={errors.peopleNum}
      />
      <button className="sr-only">Submit</button>
    </form>
  );
}

export default TipCalculatorForm;
