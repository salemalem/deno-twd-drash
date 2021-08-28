import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

import HomeResource    from "./drash-resources/home_resource.js";
import ContactResource from "./drash-resources/contact_resource.js";
import AboutResource   from "./drash-resources/about_resource.js";

const server = new Drash.Http.Server({
  directory: Deno.cwd(),
  response_output: "text/html",
  resources: [
    HomeResource,
    ContactResource,
    AboutResource,
  ],
  static_paths: ["/public"],
});

console.log("Server is running on port 1447");
server.run({
  hostname: "localhost",
  port: 1447
});