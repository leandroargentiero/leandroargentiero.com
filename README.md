[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fleandroargentiero%2Fleandroargentiero.com)

# leandroargentiero.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Type Checking**: [Typescript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Content**: [MDX with ContentLayer](https://www.contentlayer.dev/)
- **Data Fetching**: [SWR](https://planetscale.com)
- **Deployment**: [Vercel](https://vercel.com)

## Overview

- `public/*` - Static assets including images and sound.
- `scripts/*` - A useful script to generate a sitemap.
- `src/data/*` - MDX data that is used for projects.
- `src/hooks/*` - Custom hooks like for getting weather data, scrolling
  indicator and general SWR fetcher.
- `src/pages/api/*` -
  [API routes](https://nextjs.org/docs/api-routes/introduction).
- `src/pages/projects/*` - Static pre-rendered project pages using MDX.
- `src/pages/*` - All other static pages.
- `src/sections/*` - Compositions of componets used for creating pages.
- `src/styles/*` - A small amount of global styles. This project mostly uses
  Tailwind CSS framework.

## Running Locally

```bash
$ git clone https://github.com/leandroargentiero/leandroargentiero.com.git
$ cd leandroargentiero.com
$ yarn
$ yarn dev
```

Create a `.env` file similar to
[`.env.example`](https://github.com/leerob/leerob.io/blob/main/.env.example).

## Cloning / Forking

Please review the
[license](https://github.com/leandroargentiero/leandroargentiero.com/blob/main/LICENSE.txt)
and remove all of my personal information (resume, blog posts, images, etc.).
