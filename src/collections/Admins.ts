import type { CollectionConfig } from "payload";
import { isAdmin, isAdminOrSelf } from "./access";

export const Admins: CollectionConfig = {
  slug: "admins",
  auth: true,
  fields: [],
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    unlock: isAdminOrSelf,
  },
};
