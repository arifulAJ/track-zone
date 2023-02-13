import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockAction from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import LocalClockDiv from "../ui/LocalClock.styled";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timeZone, offset } = useClock(clock.timeZone, clock.offset);
  const local = useTimer(date);
  useEffect(() => {
    updateClock({
      date,
      offset,
      timeZone,
    });
  }, [date]);
  return (
    <LocalClockDiv align={"flex-end"}>
      {local && (
        <ClockDisplay
          title={clock.title}
          date={local}
          timeZone={timeZone}
          offset={offset}
        />
      )}
      <ClockAction
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
      />
    </LocalClockDiv>
  );
};
export default LocalClock;
