# Feedback Widget

This is a Feedback Widget project, where one could report a bug, send an idea or other kinds of feedback. This project's intent is to be a helper tool for other projects that can use this feedback feature.
This project was created during the Next Level Week (Return) Bootcamp by Rocketseat.

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

### Back End (server path)

On development environment SQLite was used as database provider for the easy setup.

Change the db provider to `sqlite`:
```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

Create .env file (or just an environment variable) with DB info:
```
DATABASE_URL="file:./dev.db"
```

### Front End (web path)

Create .env.local file (or just an environment variable) with API info:
```
VITE_API_URL=http://localhost:3333
```
