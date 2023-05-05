export const parseParams = (params) =>
  Object.entries(params)
    .map(([k, v]) => `${k}=${v}&`)
    .reduce((res, v) => res.concat(v), "")
    .slice(0, -1);
