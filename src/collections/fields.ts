import { randomUUID } from "crypto";

import { Field } from "payload";

export const userRelationField: Field = {
  name: "user",
  type: "relationship",
  relationTo: "users",
  defaultValue: ({ user }) => user?.collection === "users" && user.id,
};
