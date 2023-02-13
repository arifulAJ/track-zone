import { format } from "date-fns";
import useTimer from "../../../hooks/useTimer";
import TitleDate from "../../ui/DateText.style";
import TitleText from "../../ui/TitleText.style";

const ClockDisplay = ({ title, date, timeZone, offset }) => {
  const offsetHur = offset / 60;

  return (
    <div>
      <TitleText> Title :{title}</TitleText>
      <TitleDate>Date : {format(date, "dd-MMM-yyyy  ")}</TitleDate>
      <TitleDate>Time : {format(date, " hh:mm:ss aaaaa'm' ")}</TitleDate>
      <p>
        {timeZone}
        {offsetHur > 0 ? `+${Math.abs(offsetHur)}` : `-${Math.abs(offsetHur)}`}
      </p>
    </div>
  );
};
export default ClockDisplay;
