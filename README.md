Front-End Demonstration for FT
============

This is a front-end demonstration put together in preparations for an interview with FT. 

Next.js 14 has the added advantage of supporting React 19 features. 

The main difference between Next.js 13 and Next.js 14 is the addition of Server Actions and Partial Prerendering.

	* Server Actions: Server Actions are asynchronous functions that can be used to perform server-side operations, such as fetching data from a database or sending an email. They are similar to React Actions, but they are executed on the server instead of the client.

	* Partial Prerendering: Partial Prerendering allows you to render dynamic content on the server, even if it depends on user input. This can improve the performance of your application, especially for initial page loads.

	* [See more difference 13 vs 14](https://lightrains.com/blogs/nextjs-13-vs-14-what-is-new/)
	
## Tech Stack 💻

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Authentication:** [Next Auth](https://authjs.dev)
- **Database:** [Mysql](https://www.mysql.com)
- **ORM:** [Prisma ORM](https://www.prisma.io)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **File Uploads:** [uploadthing](https://uploadthing.com)
- **Payments infrastructure:** [Midtrans](https://midtrans.com)

Important NPM Packages Used
------------

	* zod - TypeScript-first schema declaration and validation library (Zero dependencies)
	* zustand - Zustand is a state management library. Can use with less code than Redux and similar libraries for managing React states
		* [About zustand](https://medium.com/globant/react-state-management-b0c81e0cbbf3)
	* react-hot-toast - Graphically pleasing browser notifications
	* nanoid - A tiny, secure, URL-friendly, unique string ID generator for JavaScript
	* cmdk - Command menu React component that can also be used as an accessible combobox
	* clsx - Utility for constructing className strings conditionally
	* headlessui - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
	* primsa - ORM [About ORM]](https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/is-prisma-an-orm)
		* [Seeding ORM](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding)
	* tanstack/react-query - A library for managing server state [About](https://tanstack.com/query/latest/docs/framework/react/overview)
	
Running the project
------------

1. Clone the repository

   ```bash
   git clone https://github.com/nsedich-development/demonstration.git
   ```

2. Install dependencies using npm

   ```bash
   npm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```
   
4. Configure your .env file with your secret

   ```env
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   
   NEXT_AUTH_SECRET=
   
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   
   MIDTRANS_CLIENT_KEY=
   MIDTRANS_SERVER_KEY=
   
   DATABASE_URL=
   ```
   
5. Generate prisma client

   ```bash
   npx prisma generate
   ```
   
6. Push the database schema

   ```bash
   npx prisma db push
   ```
   
7. Seeding the categories data

   ```bash
   npx prisma db seed
   ```

8. Start the development server

   ```bash
   npm run dev
   ```
   