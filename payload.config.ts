import { buildConfig } from "payload";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import sharp from "sharp";

import { EventTypes } from "@/collections/EventTypes.ts";
import { Events } from "@/collections/Events";
import { Users } from "@/collections/Users.ts";
import { Admins } from "@/collections/Admins.ts";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [EventTypes, Events, Users, Admins],
  secret: process.env.PAYLOAD_SECRET!,
  db: mongooseAdapter({
    url: process.env.MONGO_URI!,
    connectOptions: {
      dbName: "tracker_db",
    },
  }),
  sharp,
  admin: {
    user: "admins",
    autoLogin:
      process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === "true"
        ? {
            email: "admin@admin.tst",
            password: "admin",
          }
        : false,
  },
});
