import { Drash } from "./dependencies.js";

import { HomeResource }    from "./dependencies.js";
import { ContactResource } from "./dependencies.js";
import { AboutResource }   from "./dependencies.js";
import { PricingResource } from "./dependencies.js";

const server = new Drash.Http.Server({
  directory: Deno.cwd(),
  response_output: "text/html",
  resources: [
    HomeResource,
    ContactResource,
    AboutResource,
    PricingResource,
  ],
  static_paths: ["/public"],
});

console.log("Server is running on port 1447");
server.run({
  hostname: "localhost",
  port: 1447
});