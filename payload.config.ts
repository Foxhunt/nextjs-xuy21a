import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { EventTypes } from "./src/collections/EventTypes.ts";
import { EventLog } from "./src/collections/EventLog.ts";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [EventTypes, EventLog],
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL,
    },
    migrationDir: "migrations",
  }),
  sharp,
});
