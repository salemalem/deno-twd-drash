import { Drash } from "../dependencies.js";
import { Database as AloeDB } from 'https://deno.land/x/aloedb@0.9.0/mod.ts'

const decoder = new TextDecoder();

// database initialization
const aloeTestDB = new AloeDB({
  path: Deno.cwd() + "/database/aloe-test-db.json",
  pretty: false,
});

export class DatabaseTestResource extends Drash.Http.Resource {

  static paths = [
    "/database_test"
  ];

  async GET() {
    try {
      for(let outer_i = 0; outer_i < 20; outer_i++) {
        await aloeTestDB.drop();
        let start = performance.now();

        for(let inner_i = 0; inner_i < 10000; inner_i++) {
          await aloeTestDB.insertOne({title: "how to use linux", body: "go to linux.org"});
        }
        
        let end = performance.now();
        let time = end - start;
        console.log('Aloe DB execution time: ' + time);
      }
      // let fileContentsRaw = Deno.readFileSync(Deno.cwd() + "/public/index.html");
      // let template = decoder.decode(fileContentsRaw);
      // this.response.body = template;
      this.response.body = "hi!";
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  }
}