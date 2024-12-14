import { randomUUID } from "crypto";
import type { CollectionConfig } from "payload";

export const EventLog: CollectionConfig = {
  slug: "EventLog",
  fields: [
    {
      name: "id",
      type: "text",
      defaultValue: () => randomUUID(),
      admin: {
        disabled: true,
      },
    },
    {
      name: "type",
      type: "relationship",
      relationTo: "EventTypes",
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
};
