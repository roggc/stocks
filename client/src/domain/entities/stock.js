export const Stock = (() => {
  let id = 1;
  return ({
    currency,
    description,
    displaySymbol,
    figi,
    isin,
    shareClassFIGI,
    mic,
    symbol,
    symbol2,
    type,
  }) => {
    const stock = {
      id: id++,
      currency,
      description,
      displaySymbol,
      figi,
      isin,
      mic,
      shareClassFIGI,
      symbol,
      symbol2,
      type,
    };
    return stock;
  };
})();
