import { Suspense } from "react";

import config from "@payload-config";
import { getPayload } from "payload";

import { EventSkeleton } from "./components/Event.tsx";
import Events, { EventsSkeleton } from "./components/Events.tsx";
import StartEvent, { StartEventSkeleton } from "./components/StartEvent.tsx";

export default async function TrackerPage() {
  const payload = await getPayload({ config });

  const eventLog = payload.find({
    collection: "EventLog",
    sort: "-updatedAt",
    pagination: false,
  });

  const eventTypes = payload.find({
    collection: "EventTypes",
    pagination: false,
  });

  return (
    <>
      <Suspense fallback={<EventSkeleton withFooter />}>
        <Events showOnlyRunning eventsPromise={eventLog} />
      </Suspense>
      <Suspense fallback={<StartEventSkeleton />}>
        <StartEvent eventTypesPromise={eventTypes} />
      </Suspense>
      <Suspense fallback={<EventsSkeleton />}>
        <Events eventsPromise={eventLog} />
      </Suspense>
    </>
  );
}
