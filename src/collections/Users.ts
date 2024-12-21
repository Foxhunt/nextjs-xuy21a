import type { CollectionConfig } from "payload";
import { isAdminOrSelf } from "./access";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
    },
  },
  fields: [
    {
      name: "events",
      type: "join",
      collection: "Events",
      on: "user",
    },
    {
      name: "eventTypes",
      type: "join",
      collection: "EventTypes",
      on: "user",
    },
    {
      name: "stopRunningEvents",
      type: "checkbox",
      defaultValue: false,
    },
  ],
  access: {
    create: () => true,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    unlock: isAdminOrSelf,
  },
};
