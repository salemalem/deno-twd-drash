import { Drash } from "./dependencies.js";

// Drash resources
import { 
  HomeResource,
  // pages
  ContactResource,
  AboutResource,
  PricingResource,
  NewTutorialFormResource,
  SingleTutorialResource,
  NotFoundResource,
  // utilities
  CheckTutorialSlugResource,
}    from "./dependencies.js";


import { Tengine } from "./dependencies.js";
import {
  configure,
  renderFile,
} from "./dependencies.js";

// Set Eta's configuration
configure({
  // This tells Eta to look for templates in the ./public/views/ directory
  views: Deno.cwd() + "/public/views/",
});

const tengine = Tengine({
  render: async (...args) => {
    return await renderFile(
      args[0],
      args[1],
    );
  },
});

const server = new Drash.Http.Server({
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "debug",
  }),
  directory: Deno.cwd(),
  response_output: "text/html",
  resources: [
    HomeResource,
    // pages
    ContactResource,
    AboutResource,
    PricingResource,
    NewTutorialFormResource,
    SingleTutorialResource,
    NotFoundResource,
    // utilities
    CheckTutorialSlugResource,
  ],
  middleware: {
    after_resource: [
      tengine,
    ],
  },
  static_paths: ["/public"],
});

server.run({
  hostname: "localhost",
  port: 8080
});

console.log(`Server running at ${server.hostname}:${server.port}`);