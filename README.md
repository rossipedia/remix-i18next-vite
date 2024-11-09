# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

> [!NOTE]
> This template has been set up with a Typescript express server template, with
> `vite` configured to run in middleware mode during development using `tsx`.
> It has also been set configured with `react-i18next` for internationalization,
> and `vite-plugin-cjs-interop` to help with legacy CJS dependencies.
>
> Otherwise it's a standard Remix express app (Tailwind/PostCSS, etc).

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
