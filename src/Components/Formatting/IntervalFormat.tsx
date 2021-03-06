import * as React from "react";

interface Props {
  seconds: number;
}

const SECONDS_IN_HOUR: number = 60 * 60;
const SECONDS_IN_MINUTE: number = 60;

const secondsToFormat = (seconds: number): string => {
  let remainingSeconds = Math.max(0, seconds);
  const hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
  remainingSeconds = remainingSeconds - hours * SECONDS_IN_HOUR;

  const minutes = Math.floor(remainingSeconds / SECONDS_IN_MINUTE);
  remainingSeconds = remainingSeconds - minutes * SECONDS_IN_MINUTE;

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    remainingSeconds.toString().padStart(2, "0")
  ].join(":");
};

export default (props: Props) => <span>{secondsToFormat(props.seconds)}</span>;
