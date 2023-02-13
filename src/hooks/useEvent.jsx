import { useState } from "react";
import shortid from "shortid";

const useEvent = () => {
  const [state, setState] = useState({});

  const getEventByClockId = (clocksId) => {
    return Object.keys(state).filter((item) => item.startsWith(clocksId));
  };
  const getEvents = (isArray = false) => {
    if (!isArray) return state;
    return Object.values(state);
  };

  const adEvent = (event) => {
    event.id = shortid.generate();
    const { clocksId, id } = event;

    setState((prev) => ({
      ...prev,
      [`${clocksId} | ${id}`]: event,
    }));
    return event;
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };
  const deleteEventByClockId = () => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clocksId)
    );
    setState(events);
  };

  const updateEvent = (updated, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updated,
    };
    setState(events);
  };
  return {
    event: state,
    getEventByClockId,
    getEvents,
    adEvent,
    deleteEvent,
    deleteEventByClockId,
    updateEvent,
  };
};
export default useEvent;
