import ClockListItems from "../ui/ClockListItems.style";
import ClockListItem from "./clock-list-item";

const ClockList = ({ deleteClock, clocks, updateClock, localClock }) => {
  return (
    <div>
      <h3>List of Clock That you created : </h3>
      {clocks.length === 0 ? (
        <h2>there is no clock , place create one</h2>
      ) : (
        <ClockListItems>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localClock={localClock}
            />
          ))}
        </ClockListItems>
      )}
    </div>
  );
};
export default ClockList;
