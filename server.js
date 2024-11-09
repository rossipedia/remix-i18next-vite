import { createRequestHandler } from "@remix-run/express";
import compression from "compression";
import express from "express";
import morgan from "morgan";
const viteDevServer = process.env.NODE_ENV === "production" ? void 0 : await import("vite").then(
  (vite) => vite.createServer({
    server: { middlewareMode: true }
  })
);
const remixHandler = createRequestHandler({
  build: viteDevServer ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build") : (
    // @ts-expect-error This will need to exist at run time, after build
    // eslint-disable-next-line import/no-unresolved
    await import("./build/server/index.js")
  )
});
const app = express();
app.use(compression());
app.disable("x-powered-by");
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" })
  );
}
app.use(express.static("build/client", { maxAge: "1h" }));
app.use(morgan("tiny"));
app.all("*", remixHandler);
const port = process.env.PORT || 3e3;
app.listen(
  port,
  () => console.log(`Express server listening at http://localhost:${port}`)
);
