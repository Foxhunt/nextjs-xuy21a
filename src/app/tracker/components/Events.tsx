import { use } from "react";

import { PaginatedDocs } from "payload";
import { Event as PayloadEvent } from "../../../../payload-types.ts";

import Event, { EventSkeleton } from "./Event.tsx";

type EventsProps = {
  eventsPromise: Promise<PaginatedDocs<PayloadEvent>>;
};

export default function Events({ eventsPromise }: EventsProps) {
  const events = use(eventsPromise).docs;

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
