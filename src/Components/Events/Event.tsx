import * as React from "react";
import TimeAgoContainer from "../../Containers/Time/TimeAgoContainer";

interface Props {
  time: string;
  children: any;
}

export default (props: Props) => (
  <div className="events__event">
    <span className="events__content">{props.children}</span>
    <span className="events__time">
      <TimeAgoContainer datetime={new Date(props.time)} />
    </span>
  </div>
);
