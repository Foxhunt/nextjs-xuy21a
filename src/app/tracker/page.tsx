import { Suspense } from "react";

import { getPayload } from "payload";
import config from "@payload-config";
import { User } from "../../../payload-types.ts";

import { authUser } from "./serverActions/userActions.tsx";

import { EventSkeleton } from "./components/Event.tsx";
import Events, { EventsSkeleton } from "./components/Events.tsx";
import StartEvent, { StartEventSkeleton } from "./components/StartEvent.tsx";
import MenuBar from "./components/MenuBar.tsx";

export default async function TrackerPage() {
  const payload = await getPayload({ config });

  const user = (await authUser()) as User;

  const events = payload.find({
    collection: "Events",
    sort: "-updatedAt",
    pagination: false,
    overrideAccess: false,
    user,
  });

  const eventTypes = payload.find({
    collection: "EventTypes",
    pagination: false,
    overrideAccess: false,
    user,
  });

  return (
    <>
      <main className="min-h-screen p-4">
        <Suspense fallback={<EventSkeleton withFooter />}>
          <Events showOnlyRunning eventsPromise={events} />
        </Suspense>
        <Suspense fallback={<StartEventSkeleton />}>
          <StartEvent eventTypesPromise={eventTypes} />
        </Suspense>
        <Suspense fallback={<EventsSkeleton />}>
          <Events eventsPromise={events} />
        </Suspense>
      </main>
      {user && <MenuBar user={user} />}
    </>
  );
}
