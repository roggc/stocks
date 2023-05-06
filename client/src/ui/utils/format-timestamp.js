import moment from "moment";

export const formatTimestamp = (value) =>
  moment(new Date(value * 1000)).format("MMM Do YY");
