# Nextjs 14 Quiz Application using DrizzleORM, Vercel Postgres Database

1. Clone the repo and run
    ```
        npm i
    ```

2. Install Packages
    ```
    npm i drizzle-orm @vercel/postgres
    npm i -D drizzle-kit
    npm install dotenv
    ```

3. Upgrade the ES models in tsconfig file
    `es5 -> es6 or above`

4. Vercel Linking
    ```
    npm i -g vercel@latest
    vercel login
    vercel link
    connect project in vercel dashboard
    vercel env pull .env.development.local
    add ?sslmode=require in the POSTGRES_URL inside the .env.development.local file
    npm install @vercel/postgres
    ```

5. Add scripts in package.json
    ```
        "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        //Paste HERE BELOW LINES
        },

        "migration:generate": "drizzle-kit generate:pg",
        "db:push": "drizzle-kit push:pg"

    ```

6. Add drizzle.config.ts in root

    ```
        import {config} from "dotenv"
        import type { Config } from "drizzle-kit";

        config({path: ".env.development.local"})

        export default {
            schema: "drizzle/schema.ts",
            out: "drizzle/migrations",
            driver: 'pg',
            dbCredentials: {
            connectionString: process.env.POSTGRES_URL!
            }
        } satisfies Config;
    ```

6. Create a drizzle folder in root

7. Create file schema.ts

