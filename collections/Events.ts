import { randomUUID } from "crypto";
import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "Events",
  admin: { useAsTitle: "name" },
  fields: [
    {
      name: "id",
      type: "text",
    },
    { name: "name", type: "text", required: true },
    { name: "description", type: "text" },
  ],
  hooks: {
    beforeChange: [
      async ({ operation, data }) => {
        return operation === "create" ? { ...data, id: randomUUID() } : data;
      },
    ],
  },
};
