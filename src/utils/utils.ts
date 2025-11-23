export function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (/^[a-zA-Z]$/.test(e.key)) {
    e.preventDefault();
  }
}

export function getResults(
  bill: number,
  peopleNum: number,
  tipPercentage: string | null | undefined
) {
  let tipPercentageNum = Number(tipPercentage);

  if (peopleNum === 0 || bill === 0)
    return { tipPerPerson: '0.00', totalPerPerson: '0.00' };
  if (tipPercentage === null || tipPercentage === undefined)
    tipPercentageNum = 0;

  const tipPerPerson = ((bill * tipPercentageNum) / 100 / peopleNum).toFixed(2);
  const totalPerPerson = (
    (bill + (bill * tipPercentageNum) / 100) /
    peopleNum
  ).toFixed(2);

  return { tipPerPerson, totalPerPerson };
}
