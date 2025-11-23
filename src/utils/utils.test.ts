import { getResults } from './utils';

describe('getResults', () => {
  it('returns the correct object', () => {
    expect(getResults(145, 3, '15')).toEqual({
      tipPerPerson: '7.25',
      totalPerPerson: '55.58',
    });
  });

  it('returns 0 when bill is 0', () => {
    expect(getResults(0, 4, '10')).toEqual({
      tipPerPerson: '0.00',
      totalPerPerson: '0.00',
    });
  });

  it('returns 0 when peopleNum is 0', () => {
    expect(getResults(100, 0, '10')).toEqual({
      tipPerPerson: '0.00',
      totalPerPerson: '0.00',
    });
  });

  it('returns correct values when tip is zero', () => {
    expect(getResults(100, 2, '0')).toEqual({
      tipPerPerson: '0.00',
      totalPerPerson: '50.00',
    });
  });

  it('returns correct values when tip is undefined', () => {
    expect(getResults(100, 2, undefined)).toEqual({
      tipPerPerson: '0.00',
      totalPerPerson: '50.00',
    });
  });

  it('returns correct values when tip is null', () => {
    expect(getResults(100, 2, null)).toEqual({
      tipPerPerson: '0.00',
      totalPerPerson: '50.00',
    });
  });
});
