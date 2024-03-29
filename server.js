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
  // testing
  
} from "./dependencies.js";


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
  /*
  Every resource contains post request that renders and saves html files at /dist
  only get requests are needed for users
  post requests are called by ship_to_dist.js using fetch function
  */
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
    // testing
  ],
  middleware: {
    after_resource: [
      tengine,
    ],
  },
  static_paths: ["/public"],
});

/*
to publish at fly.io => hostname: "0.0.0.0"
to work locally      => hostname: "localhost"
*/

server.run({
  // hostname: "localhost",
  hostname: "0.0.0.0",
  port: 8080
});



console.log(`Server running at ${server.hostname}:${server.port}`);