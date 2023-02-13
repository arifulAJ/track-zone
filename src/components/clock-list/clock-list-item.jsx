import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import { formatDistance } from "date-fns";
import LocalClockDiv from "../ui/LocalClock.styled";

import useTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timeZone, clock.offset);
  const timer = useTimer(date);

  if (!date || !timer) return null;

  return (
    <LocalClockDiv display="column" width="60%">
      <ClockDisplay
        date={timer}
        title={clock.title}
        timeZone={clock.timeZone}
        offset={clock.offset}
      />
      <h4>
        Time difference :
        <span style={{ font: "status-bar" }}>
          {" "}
          {formatDistance(localClock, timer)}
        </span>
      </h4>
      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </LocalClockDiv>
  );
};
export default ClockListItem;
