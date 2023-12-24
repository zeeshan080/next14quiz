import {config} from "dotenv"
import type { Config } from "drizzle-kit";

config({path: ".env.development.local"})

export default {
    schema: "drizzle/schema.ts",
    out: "drizzle/migrations",
    driver: 'pg',
    dbCredentials: {
      connectionString: process.env.POSTGRES_URL!,
    //   password: process.env.POSTGRES_PASSWORD,
    //   host: process.env.POSTGRES_HOST,
    //   user: process.env.POSTGRES_USER,
    //   database: process.env.POSTGRES_DATABASE
    }
  } satisfies Config;