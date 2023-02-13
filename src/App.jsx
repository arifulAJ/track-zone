import { useEffect, useState } from "react";
import { generate } from "shortid";
import { createGlobalStyle } from "styled-components";

import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";
import Modal from "./components/shared/modal";

import TitleText from "./components/ui/TitleText.style";
import useEvent from "./hooks/useEvent";

const LOCAL_CLOCK_INIT = {
  title: " local Clock",
  timeZone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const { getEvents, getEventByClockId, event, adEvent } = useEvent();

  useEffect(() => {
    if (Object.keys(event).length == 0) {
      adEvent({ title: "event", clocksId: "cio123" });
    }
    // console.log("All event", getEvents());
    // console.log("All event by array", getEvents(true));
    // console.log("get event by id", getEventByClockId("cio123"));
  }, [event]);

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    const updateClockMap = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updateClockMap);
  };

  const deleteClock = (id) => {
    const deleteClocks = clocks.filter((clock) => clock.id != id);
    setClocks(deleteClocks);
  };
  return (
    <div>
      <TitleText style={{ textAlign: "center" }}>
        Track your won Timezone
      </TitleText>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        createClock={createClock}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
        localClock={localClock.date}
      />
    </div>
  );
}

export default App;
