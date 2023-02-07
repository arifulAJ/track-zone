import { useState } from "react";

import LocalClock from "./components/local-clock";
import SelectStyled from "./components/ui/Select.styled";
import TitleText from "./components/ui/TitleText.style";

const LOCAL_CLOCK_INIT = {
  title: " local Clock",
  timeZone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  return (
    <div>
      <TitleText style={{ textAlign: "center" }}>
        Track your won Timezone
      </TitleText>
      <LocalClock clock={localClock} updateClock={updateLocalClock} />
    </div>
  );
}

export default App;
