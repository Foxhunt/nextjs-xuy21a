import { randomUUID } from "crypto";
import type { CollectionConfig } from "payload";

export const EventLog: CollectionConfig = {
  slug: "EventLog",
  fields: [
    {
      name: "id",
      type: "text",
    },
    {
      name: "type",
      type: "relationship",
      relationTo: "Events",
      required: true,
    },
    {
      name: "endedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          timeFormat: "HH:mm",
          timeIntervals: 5,
        },
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ operation, data }) => {
        return operation === "create" ? { ...data, id: randomUUID() } : data;
      },
    ],
  },
};
