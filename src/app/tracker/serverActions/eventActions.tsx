"use server";

import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

import { getPayload } from "payload";
import config from "@payload-config";

import { EventType } from "../../../../payload-types.ts";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

async function authUser() {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });

  if (!user) {
    redirect("/tracker/login", RedirectType.push);
  }

  return user;
}

export async function stopEvent(id: string) {
  const payload = await getPayload({ config });
  const user = await authUser();

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

export async function startEvent(
  eventTypeName: string,
  stopRunningEvents: boolean
) {
  const payload = await getPayload({ config });
  const user = await authUser();

  if (stopRunningEvents) {
    const runningEvents = await payload.find({
      collection: "EventLog",
      sort: "-createdAt",
      where: {
        endedAt: {
          equals: null,
        },
      },
      overrideAccess: false,
      user,
    });

    const stopEventPromisses = runningEvents.docs.map((event) =>
      stopEvent(event.id)
    );
    await Promise.all(stopEventPromisses);
  }

  const eventType = await payload.find({
    collection: "EventTypes",
    where: { name: { equals: eventTypeName } },
    limit: 1,
  });

  let newEventType: EventType;

  if (eventType.docs.length === 0) {
    newEventType = await createEventType(eventTypeName);
  } else {
    await payload.update({
      collection: "EventTypes",
      where: { name: { equals: eventTypeName } },
      data: {
        lastUsedAt: new Date().toISOString(),
      },
      overrideAccess: false,
      user,
    });
  }

  await payload.create({
    collection: "EventLog",
    data: {
      type: eventType.docs[0] ?? newEventType!,
    },
    overrideAccess: false,
    user,
  });

  revalidatePath("/tracker");
}

export async function createEventType(name: string) {
  const payload = await getPayload({ config });
  const user = await authUser();

  const newEventType = await payload.create({
    collection: "EventTypes",
    data: {
      name: name.trim(),
    },
    overrideAccess: false,
    user,
  });

  revalidatePath("/tracker");

  return newEventType;
}
