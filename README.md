# Portfolio — Leiziane

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

The design follows a "trade ticket" concept, featuring an animated ticker tape and projects displayed like open positions — a direct reference to my background as both a day trader and developer.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel

## Running Locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Customization

Before publishing, you can update the following files:

### `app/page.tsx`

Update:

- Email
- GitHub
- LinkedIn
- Project descriptions
- Contact information

### `app/layout.tsx`

Update:

- Page title
- SEO description
- Metadata

### `components/Ticker.tsx`

Edit the list of technologies, skills, and tools displayed in the animated ticker at the top of the page.

### `components/ProjectCard.tsx`

Customize project statuses such as:

- `LIVE`
- `SHIPPED`
- `IN BUILD`

You can also adjust the styling if you want to add new project statuses.

## Project Structure

```text
app/
  layout.tsx      -> Root layout, fonts, and metadata
  page.tsx        -> Main portfolio page
  globals.css     -> Global styles

components/
  Ticker.tsx       -> Animated ticker / marquee
  ProjectCard.tsx  -> Project card styled like a trading ticket
```

## Deployment

The project is deployed with Vercel.

To deploy your own version:

1. Push the project to a GitHub repository.
2. Go to https://vercel.com/new
3. Import your repository.
4. Deploy the project.

Vercel automatically detects Next.js projects, so no additional configuration is usually required.

## Design Concept

The portfolio combines software development with trading-inspired visuals.

Projects are presented like open market positions, while the animated ticker highlights technologies and skills across the top of the page.

The goal is to create a portfolio that feels personal while still keeping the interface clean and professional.

## Author

Leiziane Trevisan Dardin