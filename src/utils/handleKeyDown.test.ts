import React from 'react';
import { handleKeyDown } from './utils';

describe('handleKeyDown', () => {
  const lettersKey = ['A', 'a', 'Z', 'z'];

  lettersKey.forEach((letter) => {
    it('calls preventDefault() for letter key', () => {
      const mockEvent = {
        key: letter,
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;
      handleKeyDown(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });

  const nonLetterKeys = ['1', '0', '.', '/', ' '];

  nonLetterKeys.forEach((letter) => {
    it('not calls preventDefault() for letter key', () => {
      const mockEvent = {
        key: letter,
        preventDefault: vi.fn(),
      } as unknown as React.KeyboardEvent<HTMLInputElement>;
      handleKeyDown(mockEvent);
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });
});
