import { EventLog, Event } from "../../../payload-types.ts";

export default function Events({ eventLog }: { eventLog: EventLog[] }) {
  return (
    <div>
      <div>EventLog</div>
      <div>
        {eventLog.map((event) => {
          return (
            <div key={event.id}>
              <div>Name: {(event.type as Event).name}</div>
              <div>ID: {event.id}</div>
              <div>
                Start:{" "}
                {new Date(event.createdAt).toLocaleString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div>
                Ende:{" "}
                {event.endedAt &&
                  new Date(event.endedAt).toLocaleString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </div>
              <div>
                Dauer:{" "}
                {event.endedAt &&
                  Math.abs(
                    new Date(event.endedAt).getTime() -
                      new Date(event.createdAt).getTime()
                  ) /
                    1000 /
                    60}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
