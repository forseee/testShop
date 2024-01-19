import { useState, useEffect } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function useTimer(
  deadlineTime: Date | null,
  callback: () => void,
  delay = SECOND
) {
  const [timespan, setTimespan] = useState(
    new Date(deadlineTime).getTime() - new Date().getTime()
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!deadlineTime) {
      setTimespan(0);
    }
    if (deadlineTime) {
      interval = setInterval(() => {
        if (new Date(deadlineTime).getTime() <= new Date().getTime()) {
          callback();
        }
        setTimespan(new Date(deadlineTime).getTime() - new Date().getTime());
      }, delay);
    } else {
    }
    return () => {
      clearInterval(interval);
    };
  }, [deadlineTime, delay]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60),
  };
}
