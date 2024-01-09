import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function useTimer(
  deadline: Date | null,
  callback: () => void,
  interval = SECOND
) {
  const [timespan, setTimespan] = useState(
    deadline.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan(new Date(deadline).getTime() - Date.now());
    }, interval);

    if (timespan === 0) {
      callback();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline, interval]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60),
  };
}
