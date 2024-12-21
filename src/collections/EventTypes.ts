import type { CollectionConfig } from "payload";

import { userRelationField } from "./fields";
import { belongsToUser, isAuthenticated } from "./access";

export const EventTypes: CollectionConfig = {
  slug: "EventTypes",
  admin: { useAsTitle: "name" },
  fields: [
    userRelationField,
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "usageCount",
      type: "number",
      virtual: true,
      admin: { readOnly: true },
      hooks: {
        afterRead: [
          async ({ req, data }) => {
            const count = await req.payload.db.count({
              collection: "Events",
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
    {
      name: "events",
      type: "join",
      collection: "Events",
      on: "type",
    },
    {
      name: "description",
      type: "text",
    },
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
  access: {
    create: isAuthenticated,
    read: belongsToUser,
    update: belongsToUser,
    delete: belongsToUser,
  },
};
