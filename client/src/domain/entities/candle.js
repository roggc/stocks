export const Candle = (() => {
  let id = 1;
  return ({ c, h, l, o, s, t, v }) => {
    const candle = {
      id: id++,
      c,
      h,
      l,
      o,
      s,
      t,
      v,
    };
    return candle;
  };
})();
