import type { CollectionConfig } from "payload";

import { belongsToUser, isAuthenticated } from "./access";
import { userRelationField } from "./fields";

export const Events: CollectionConfig = {
  slug: "Events",
  admin: { useAsTitle: "type" },
  fields: [
    userRelationField,
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
  access: {
    create: isAuthenticated,
    read: belongsToUser,
    update: belongsToUser,
    delete: belongsToUser,
  },
};
