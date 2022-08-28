import { atom } from './factory';

describe('Factory', () => {
  it('Should return values', () => {
    const result = atom(() => ({
      value: 1
    }));

    expect(result).toStrictEqual({
      value: 1
    });
  });
});
