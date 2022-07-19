# Feedback Widget

This is a Feedback Widget project, where one could report a bug, send an idea or other kinds of feedback. This project's intent is to be a helper tool for other projects that can use this feedback feature.
This project was created during the Next Level Week (Return) Bootcamp by Rocketseat.

Click the button below to check this project in an online development environment:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/MatheusSoutto/nlw-return)

## Some of the technologies used:

- React
- Vite
- Tailwindcss
- NodeJS
- Express
- Jest
- Prisma
- Nodemailer
- PostgreSQL

## Local development setup

Instructions to set this app in your local environment.

**The first step is to run `npm install` in both `server` and `web` paths.**

### Database (`server/prisma` path)

On development environment, SQLite was used as database provider for the easy setup. To be able to use the same, follow the next steps

1. Change the db provider in `schema.prisma` to `sqlite`:
```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

2. Set up the `datasource url`. For this, there are two options:

- Set the `datasource url` to the database file path:
```
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

- Create a `.env` file (or an environment variable) with the database file path:
```
DATABASE_URL="file:./dev.db"
```

3. Run the Migrations to create the table in the database, with the following command:
```
npx prisma migrate dev
```

4. To run the database, run the following command:
```
npm run db -y
```

**Note:** the database will open the port `5555`, so it will be acessible on `http://localhost:5555`.

### Back End (`server path`)

1. Add the Front End (`web`) URL to the environment variables, either of the system, or in `.env` file:
```
VITE_WEB_URL=http://localhost:3000
```

**Note:** this is needed so the back end allows the web app to access the requests on cors policy.

2. To run the back end API service, run the following command on a separate terminal (make sure it is in the `server` path):
```
npm run dev
```

### Front End (`web path`)

1. In the `web` path, create a .env.local file with the API URL:
```
VITE_API_URL=http://localhost:3333
```

2. To run the web app, run the following command on a separate terminal (make sure it is in the `web` path):
```
npm run dev
```