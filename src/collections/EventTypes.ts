import { randomUUID } from "crypto";
import type { CollectionConfig } from "payload";

export const EventTypes: CollectionConfig = {
  slug: "EventTypes",
  admin: { useAsTitle: "name" },
  fields: [
    {
      name: "id",
      type: "text",
      defaultValue: () => randomUUID(),
      admin: {
        disabled: true,
      },
    },
    { name: "name", type: "text", required: true },
    {
      name: "usageCount",
      type: "number",
      virtual: true,
      admin: { readOnly: true },
      hooks: {
        afterRead: [
          async ({ req, data }) => {
            const count = await req.payload.db.count({
              collection: "EventLog",
              where: {
                type: {
                  equals: data!.id,
                },
              },
              req,
            });
            return count.totalDocs;
          },
        ],
      },
    },
    { name: "events", type: "join", collection: "EventLog", on: "type" },
    { name: "description", type: "text" },
    {
      name: "lastUsedAt",
      type: "date",
      defaultValue: () => new Date(),
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          timeFormat: "HH:mm:ss",
          timeIntervals: 5,
        },
      },
    },
  ],
};
