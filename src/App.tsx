import React from 'react';
import { useForm } from 'react-hook-form';
import Results from './components/Results';
import TipCalculatorForm from './components/TipCalculatorForm';
import { TipForm, tipFormSchema } from './schema/tip';
import { zodResolver } from '@hookform/resolvers/zod';
import { getResults } from './utils/utils';

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TipForm>({
    resolver: zodResolver(tipFormSchema),
    mode: 'onChange',
  });

  const [tipPerPerson, setTipPerPerson] = React.useState<string>('0.00');
  const [totalPerPerson, setTotalPerPerson] = React.useState<string>('0.00');

  const watchedValues = watch();
  const { bill, peopleNum, tipCustom, tipRadio } = watchedValues;

  function onSubmit(data: TipForm) {
    const { bill, peopleNum, tipCustom, tipRadio } = data;
    const finalTip = tipCustom || tipRadio;

    const { tipPerPerson: tip, totalPerPerson: total } = getResults(
      bill,
      peopleNum,
      finalTip
    );
    setTipPerPerson(tip);
    setTotalPerPerson(total);
  }

  function handleReset() {
    reset();
    setTipPerPerson('0.00');
    setTotalPerPerson('0.00');
  }

  const isResetDisabled =
    tipPerPerson === '0.00' &&
    totalPerPerson === '0.00' &&
    !bill &&
    !peopleNum &&
    !tipCustom &&
    !tipRadio;

  return (
    <main className="shadow-tip mx-auto mt-10 grid max-w-2xl rounded-t-3xl bg-white md:mb-12 md:rounded-3xl lg:mt-20 lg:max-w-230 lg:grid-cols-2 lg:gap-12">
      <h1 className="sr-only">Splitter Tip Calculator App</h1>
      <TipCalculatorForm
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
      <Results
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        reset={handleReset}
        disabled={isResetDisabled}
      />
    </main>
  );
}

export default App;
