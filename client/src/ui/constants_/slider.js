import { getUNIXTimestamp } from "ui/utils";

export const MAX = getUNIXTimestamp(Date.now());
export const STEP = 60 * 60 * 24;
export const MIN = MAX - STEP * 365;
