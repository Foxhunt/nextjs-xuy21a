"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import config from "@payload-config";
import { getPayload } from "payload";

export async function authUser() {
  const payload = await getPayload({ config });
  const { user } = await payload.auth({ headers: await headers() });

  if (!user) {
    redirect("/tracker/login");
  }

  return user;
}

export async function setStopRunningEvents(value: boolean) {
  const payload = await getPayload({ config });
  const user = await authUser();

  await payload.update({
    collection: "users",
    id: user.id,
    data: {
      stopRunningEvents: value,
    },
    overrideAccess: false,
    user,
  });

  revalidatePath("/tracker");
}
