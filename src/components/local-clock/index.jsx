import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import LocalClockDiv from "../ui/LocalClock.styled";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timeZone, offset } = useClock(clock.timeZone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      offset,
      timeZone,
    });
  }, [date]);
  return (
    <LocalClockDiv>
      {date && (
        <ClockDisplay
          title={clock.title}
          date={date}
          timeZone={timeZone}
          offset={offset}
        />
      )}
      <ClockAction local={true} clock={clock} updateClock={updateClock} />
    </LocalClockDiv>
  );
};
export default LocalClock;
