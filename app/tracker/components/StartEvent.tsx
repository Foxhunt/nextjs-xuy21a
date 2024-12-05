"use client";

import { useRouter } from "next/navigation.js";
import { Event } from "../../../payload-types.ts";
import { startEvent, createEventType } from "./eventActions.tsx";

// TODO: rename to EventTypes

export default function StartEvent({ events }: { events: Event[] }) {
  const router = useRouter();

  return (
    <div>
      StartEvent
      <div>
        {events.map((event) => (
          <div
            key={event.id}
            onClick={async () => {
              console.log(await startEvent(event));
              router.refresh();
            }}
          >
            {event.name}
          </div>
        ))}
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const newEventType = await createEventType(
              e.currentTarget.elements["name"].value
            );
            await startEvent(newEventType);

            router.refresh();
          }}
        >
          <input type="text" name="name" placeholder="Name" />
          <button type="submit">Add and Start</button>
        </form>
      </div>
    </div>
  );
}
