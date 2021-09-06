import { Drash } from "./dependencies.js";

import { HomeResource }    from "./drash-resources/home_resource.js";
import { SingleTutorialResource }    from "./drash-resources/single_tutorial_resource.js";
import { ContactResource } from "./dependencies.js";
import { AboutResource }   from "./dependencies.js";
import { PricingResource } from "./dependencies.js";
import { DatabaseTestResource }    from "./drash-resources/database_test_resource.js";
import { MarkdownConverterTestResource }    from "./drash-resources/markdown_converter_test_resource.js";
import { InsertToDbFromFormResource }    from "./drash-resources/insert_to_db_from_form_resource.js";


import { Tengine } from "https://deno.land/x/drash_middleware@v0.7.4/tengine/mod.ts";
import {
  configure,
  renderFile,
} from "https://deno.land/x/eta@v1.12.3/mod.ts";

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
    ContactResource,
    AboutResource,
    PricingResource,
    SingleTutorialResource,
    DatabaseTestResource,
    MarkdownConverterTestResource,
    InsertToDbFromFormResource,
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