import { Suspense } from "react";

import { getPayload } from "payload";
import config from "@payload-config";

import StartEvent from "./components/StartEvent.tsx";
import Events from "./components/Events.tsx";

export default async function TrackerPage() {
  const payload = await getPayload({ config });

  const eventLog = payload.find({
    collection: "EventLog",
    sort: "-updatedAt",
    pagination: false,
  });

  const eventTypes = await payload.find({
    collection: "EventTypes",
    pagination: false,
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Events showOnlyRunning eventsPromise={eventLog} />
      </Suspense>
      <StartEvent eventTypes={eventTypes.docs} />
      <Suspense fallback={<div>Loading...</div>}>
        <Events eventsPromise={eventLog} />
      </Suspense>
    </>
  );
}
