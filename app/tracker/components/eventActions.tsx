"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

import { getPayload } from "payload";
import config from "@payload-config";

import { Event } from "../../../payload-types.ts";

export async function stopEvent(id: string) {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });

  console.log(user);

  await payload.update({
    collection: "EventLog",
    id,
    data: {
      endedAt: new Date().toISOString(),
    },
    overrideAccess: false,
    user,
  });

  revalidatePath("/tracker");
}

export async function startEvent(type: Event) {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });

  const currentEvent = await payload.find({
    collection: "EventLog",
    limit: 1,
    sort: "-createdAt",
    where: {
      endedAt: {
        equals: null,
      },
    },
    overrideAccess: false,
    user,
  });

  if (currentEvent.totalDocs > 0) {
    await stopEvent(currentEvent.docs[0].id);
  }

  return await payload.create({
    collection: "EventLog",
    data: {
      type,
    },
    overrideAccess: false,
    user,
  });
}

export async function createEventType(name: string) {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });

  const newEventType = await payload.create({
    collection: "Events",
    data: {
      name,
    },
    overrideAccess: false,
    user,
  });

  revalidatePath("/tracker");

  return newEventType;
}
