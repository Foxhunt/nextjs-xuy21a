import { randomUUID } from "crypto";
import type { CollectionConfig } from "payload";

export const EventTypes: CollectionConfig = {
  slug: "EventTypes",
  admin: { useAsTitle: "name" },
  fields: [
    {
      name: "id",
      type: "text",
    },
    { name: "name", type: "text", required: true },
    { name: "description", type: "text" },
    { name: "lastUsedAt", type: "date", defaultValue: new Date() },
  ],
  hooks: {
    beforeChange: [
      async ({ operation, data }) => {
        return operation === "create" ? { ...data, id: randomUUID() } : data;
      },
    ],
  },
};
