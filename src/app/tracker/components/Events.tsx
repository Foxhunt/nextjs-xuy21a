import { use } from "react";

import { PaginatedDocs } from "payload";
import { Event as PayloadEvent } from "../../../../payload-types.ts";

import Event, { EventSkeleton } from "./Event.tsx";

type EventsProps = {
  eventsPromise: Promise<PaginatedDocs<PayloadEvent>>;
  showOnlyRunning?: boolean;
};

export default function Events({
  eventsPromise,
  showOnlyRunning,
}: EventsProps) {
  const events = use(eventsPromise).docs.filter((event) =>
    showOnlyRunning ? !event.endedAt : event.endedAt
  );

  return (
    events.length > 0 && (
      <div className="gap-4 flex flex-col">
        {events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    )
  );
}

export function EventsSkeleton() {
  return (
    <div className="gap-4 flex flex-col">
      <EventSkeleton />
      <EventSkeleton />
      <EventSkeleton />
      <EventSkeleton />
    </div>
  );
}
