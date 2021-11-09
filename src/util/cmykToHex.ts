function normalise(cmyk: Colour['cmyk']['c']) {
  return cmyk / 100;
}

export function cmykToHex({ c, m, y, k }: Colour['cmyk']): string {
  return (
    '#' +
    [c, m, y]
      .map(cmy => {
        const rgb = Math.round(255 * (1 - normalise(cmy)) * (1 - normalise(k)));
        return rgb.toString(16).padStart(2, '0');
      })
      .join('')
  );
}
