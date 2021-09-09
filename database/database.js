import { Database as AloeDB } from "https://deno.land/x/aloedb@0.9.0/mod.ts";


// database initialization
export const tutorialsDB = new AloeDB({
  path: Deno.cwd() + "/database/tutorials.json",
  pretty: false,
});
