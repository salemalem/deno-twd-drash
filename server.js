import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import HomeResource from "./home_resource.js";

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [
    HomeResource,
  ]
});

console.log("Server is running on port 1447");
server.run({
  hostname: "localhost",
  port: 1447
});