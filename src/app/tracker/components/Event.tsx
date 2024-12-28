"use client";

import { useEffect, useState, useTransition } from "react";

import { Event as EventPayload, EventType } from "../../../../payload-types.ts";

import { stopEvent } from "../serverActions/eventActions.tsx";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";

const millisecondsPerSecond = 1000;
const millisecondsPerMinute = millisecondsPerSecond * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;

type EventProps = {
  event: EventPayload;
};

export default function Event({ event }: EventProps) {
  const [isPending, startTransition] = useTransition();

  const [duration, setDuration] = useState(
    (event.endedAt ? new Date(event.endedAt).getTime() : Date.now()) -
      new Date(event.createdAt).getTime()
  );

  useEffect(() => {
    const calculateDuration = () => {
      const startTime = new Date(event.createdAt);
      const endTime = event.endedAt ? new Date(event.endedAt) : new Date();

      const durationMs = endTime.getTime() - startTime.getTime();
      setDuration(durationMs); // Keep this for the existing time display
    };

    calculateDuration(); // Initial calculation

    if (!event.endedAt) {
      const interval = setInterval(() => {
        calculateDuration();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [event.createdAt, event.endedAt]);

  return (
    <Card>
      <CardHeader className="justify-between">
        <h1 className="text-large font-semibold">
          {(event.type as EventType).name}
        </h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row justify-between items-stretch min-h-1 h-fit">
        <div className="grow">
          <p>
            {new Date(event.createdAt).toLocaleTimeString("de-DE", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <Divider />
          <p className="text-small font-light">
            {new Date(event.createdAt).toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <Divider />
          <p className="text-small font-extralight">Start</p>
        </div>
        <Divider orientation="vertical" />
        <div className="grow flex flex-col place-content-around place-items-center">
          <p className="w-20 text-center font-mono">
            {Math.floor(duration / millisecondsPerHour)
              .toFixed(0)
              .padStart(2, "0")}
            :
            {Math.floor(
              (duration % millisecondsPerHour) / millisecondsPerMinute
            )
              .toFixed(0)
              .padStart(2, "0")}
            :
            {Math.floor(
              (duration % millisecondsPerMinute) / millisecondsPerSecond
            )
              .toFixed(0)
              .padStart(2, "0")}
          </p>
          <Divider />
          <p className="text-small font-extralight">Dauer</p>
        </div>
        <Divider orientation="vertical" />
        <div className="grow flex flex-col place-items-end">
          <p>
            {event.endedAt
              ? new Date(event.endedAt).toLocaleTimeString("de-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              : "-"}
          </p>
          <Divider />
          <p className="text-small font-light">
            {event.endedAt
              ? new Date(event.endedAt).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : new Date().toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
          </p>{" "}
          <Divider />
          <p className="text-small font-extralight">Ende</p>
        </div>
      </CardBody>
      {!event.endedAt && (
        <>
          <Divider />
          <CardFooter className="justify-end">
            <Button
              isLoading={isPending}
              onPress={() => {
                startTransition(() => {
                  stopEvent(event.id);
                });
              }}
            >
              Stop
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

type EventSkeletonProps = {
  withFooter?: boolean;
};

export function EventSkeleton({ withFooter = false }: EventSkeletonProps) {
  return (
    <Card>
      <CardHeader className="justify-between">
        <Skeleton className="rounded-lg">
          <h1 className="text-large font-semibold">Skeleton</h1>
        </Skeleton>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row justify-between items-stretch h-1 min-h-fit">
        <Skeleton className="rounded-lg w-full">
          <div className="grow">
            <p>Start</p>
            <Divider />
            <p className="text-small font-light">Start</p>
            <Divider />
            <p className="text-small font-extralight">Start</p>
          </div>
        </Skeleton>
      </CardBody>
      {withFooter && (
        <>
          <Divider />
          <CardFooter className="justify-end">
            <Button>Stop</Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
}
