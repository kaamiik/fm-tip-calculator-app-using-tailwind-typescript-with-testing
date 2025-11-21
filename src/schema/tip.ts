import { z } from 'zod';

export const tipFormSchema = z
  .object({
    bill: z
      .string()
      .min(1, '‌Bill amount is required')
      .refine((val) => !isNaN(Number(val)), {
        message: 'Must be a valid number',
      })
      .refine((val) => Number(val) > 0, {
        message: "Can't be zero or less",
      }),

    tipRadio: z.string().optional(),
    tipCustom: z.string().optional(),
    peopleNum: z
      .string()
      .min(1, 'Number of people is required')
      .refine((val) => !isNaN(Number(val)), {
        message: 'Must be a valid number',
      })
      .refine((val) => Number(val) > 0, {
        message: "Can't be zero or less",
      }),
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
          path: ['tipRadio'],
        });
        return;
      }

      if (customValue <= 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'Must be greater than 0',
          path: ['tipRadio'],
        });
        return;
      }

      if (customValue > 100) {
        ctx.addIssue({
          code: 'custom',
          message: 'Cannot exceed 100%',
          path: ['tipRadio'],
        });
        return;
      }
    }
  });

export type TipForm = z.input<typeof tipFormSchema>;
