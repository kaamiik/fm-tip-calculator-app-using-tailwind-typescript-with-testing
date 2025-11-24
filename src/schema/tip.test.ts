import { ZodError } from 'zod';
import { tipFormSchema } from './tip';

describe('tipFormSchema', () => {
  it('throws an error when bill is 0', () => {
    expect(() =>
      tipFormSchema.parse({
        bill: 0,
        peopleNum: 2,
        tipRadio: '10',
        tipCustom: '',
      })
    ).toThrow();
  });

  it('throws an error if neither tipRadio nor tipCustom is provided', () => {
    try {
      tipFormSchema.parse({
        bill: 100,
        peopleNum: 2,
        tipRadio: null,
        tipCustom: '',
      });
    } catch (err) {
      if (err instanceof ZodError) {
        expect(err.issues[0].message).toBe(
          'Please select a tip or enter a custom value'
        );
      } else {
        throw err;
      }
    }
  });
});
