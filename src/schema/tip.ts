import { z } from 'zod';

export const tipFormSchema = z
  .object({
    bill: z.coerce
      .number<number>('Must be a valid number')
      .gt(0, "Can't be zero or less"),

    tipRadio: z.string().optional().nullable(),
    tipCustom: z.string().optional().nullable(),
    peopleNum: z.coerce
      .number<number>('Must be a valid number')
      .int('Must be an integer')
      .gt(0, "Can't be zero or less"),
  })
  .superRefine((data, ctx) => {
    const hasRadio = data.tipRadio;
    const hasCustom = data.tipCustom && data.tipCustom.trim() !== '';

    if (!hasRadio && !hasCustom) {
      ctx.addIssue({
        code: 'custom',
        message: 'Please select a tip or enter a custom value',
        path: ['tipRadio'],
      });
      return;
    }

    if (hasCustom) {
      const customValue = Number(data.tipCustom);

      if (isNaN(customValue)) {
        ctx.addIssue({
          code: 'custom',
          message: 'Must be a valid number',
          path: ['tipCustom'],
        });
        return;
      }

      if (customValue <= 0) {
        ctx.addIssue({
          code: 'custom',
          message: "Can't be zero or less",
          path: ['tipCustom'],
        });
        return;
      }

      if (customValue > 100) {
        ctx.addIssue({
          code: 'custom',
          message: 'Cannot exceed 100%',
          path: ['tipCustom'],
        });
        return;
      }
    }
  });

export type TipForm = z.infer<typeof tipFormSchema>;
