"use client";

import { useRouter } from "next/navigation.js";
import { EventLog, Event } from "../../../payload-types.ts";
import { stopEvent } from "./eventActions.tsx";

type CurrentEventProps = {
  event: EventLog;
};

export default function CurrentEvent({
  event: { id, type, createdAt, endedAt },
}: CurrentEventProps) {
  const router = useRouter();

  return (
    <div>
      <div>CurrentEvent</div>
      {endedAt ? (
        <div>no CurrentEvent</div>
      ) : (
        <>
          <div>Name: {(type as Event).name}</div>
          <div>ID: {id}</div>
          <div>
            Start:{" "}
            {new Date(createdAt).toLocaleString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div>
            Ende:{" "}
            {endedAt &&
              new Date(endedAt).toLocaleString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
          </div>
          <button
            onClick={async () => {
              await stopEvent(id);
              router.refresh();
            }}
          >
            Stop
          </button>
        </>
      )}
    </div>
  );
}
