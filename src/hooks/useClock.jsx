import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIMEZONE_OFFSET } from "../constants/constants";

const useClock = (timeZone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZone, setLocalTimeZone] = useState("");
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();

    const lo = d.getTimezoneOffset();

    d = addMinutes(d, lo);

    setUtc(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc != null) {
      if (timeZone) {
        offset = TIMEZONE_OFFSET[timeZone] ?? offset;

        const newUtc = addMinutes(utc, offset);

        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, -localOffset);
        const dateStarArr = newUtc.toUTCString().split(" ");
        setLocalDate(newUtc);
        setLocalTimeZone(dateStarArr.pop());
      }
    }
  }, [utc, timeZone, offset]);

  return {
    date: localDate,
    localUtc: utc,
    offset: offset || -localOffset,
    timeZone: timeZone || localTimeZone,
  };
};
export default useClock;
