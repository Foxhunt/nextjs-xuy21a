"use client";

import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState, useTransition } from "react";
import { EventLog, EventType } from "../../../../payload-types.ts";
import { stopEvent } from "../serverActions/eventActions.tsx";

type EventProps = {
  event: EventLog;
};

export default function Event({ event }: EventProps) {
  const [isPending, startTransition] = useTransition();

  const [duration, setDuration] = useState(
    (event.endedAt ? new Date(event.endedAt).getTime() : Date.now()) -
      new Date(event.createdAt).getTime()
  );

  useEffect(() => {
    if (!event.endedAt) {
      const interval = setInterval(() => {
        setDuration(Date.now() - new Date(event.createdAt).getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [event.createdAt, event.endedAt]);

  return (
    <Card>
      <CardHeader>{(event.type as EventType).name}</CardHeader>
      <CardBody className="flex-row">
        <div>
          <div>
            Start:{" "}
            {new Date(event.createdAt).toLocaleString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div>
          {event.endedAt && (
            <div>
              Ende:{" "}
              {new Date(event.endedAt).toLocaleString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
          )}
          <div>
            Dauer:{" "}
            {new Date(duration).getUTCHours().toString().padStart(2, "0")}:
            {new Date(duration).getUTCMinutes().toString().padStart(2, "0")}:
            {new Date(duration).getUTCSeconds().toString().padStart(2, "0")}
          </div>
        </div>
        {!event.endedAt && (
          <div className="grow flex justify-center items-center">
            <Button
              isLoading={isPending}
              onClick={() => {
                startTransition(() => {
                  stopEvent(event.id);
                });
              }}
            >
              stop
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
