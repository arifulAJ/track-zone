import { TIMEZONE_OFFSET } from "../constants/constants";

export const getOffset = (start = -11.5, ending = 12) => {
  let offsets = [];
  for (let i = start; i <= ending; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

export const getTimezoneOffset = () => {
  return ["UTC", "GMT", ...Object.keys(TIMEZONE_OFFSET)];
};
