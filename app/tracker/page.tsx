import { getPayload } from "payload";
import config from "@payload-config";

import CurrentEvent from "./components/CurrentEvent.tsx";
import Events from "./components/Events.tsx";
import StartEvent from "./components/StartEvent.tsx";

export default async function TrackerPage() {
  const payload = await getPayload({ config });

  const eventLog = await payload.find({
    collection: "EventLog",
    sort: "-createdAt",
    limit: 100,
  });

  const events = await payload.find({
    collection: "Events",
    limit: 100,
  });

  return (
    <>
      {eventLog.docs[0] && <CurrentEvent event={eventLog.docs[0]} />}
      <StartEvent events={events.docs} />
      <Events eventLog={eventLog.docs.filter((event) => event.endedAt)} />
    </>
  );
}
