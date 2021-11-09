import { cmykToHex } from './cmykToHex';

describe('cmykToHex', () => {
  it('converts CMYK colour to CSS hex value', () => {
    expect(cmykToHex({ c: 100, m: 0, y: 0, k: 0 })).toEqual('#00ffff');
    expect(cmykToHex({ c: 0, m: 100, y: 0, k: 0 })).toEqual('#ff00ff');
    expect(cmykToHex({ c: 0, m: 0, y: 100, k: 0 })).toEqual('#ffff00');
    expect(cmykToHex({ c: 0, m: 0, y: 0, k: 100 })).toEqual('#000000');
    expect(
      cmykToHex({
        c: 13,
        m: 73,
        y: 100,
        k: 0,
      }),
    ).toEqual('#de4500');
  });
});
