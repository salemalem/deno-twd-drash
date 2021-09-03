import { Drash } from "../dependencies.js";
import { Database } from 'https://deno.land/x/aloedb@0.9.0/mod.ts'

// database initialization
const db = new Database({
  path: Deno.cwd() + "/database/test-db.json",
  pretty: true,
});

export class DatabaseTestResource extends Drash.Http.Resource {

  static paths = [
    "/database_test"
  ];

  async GET() {
    try {
      // await db.insertOne({title: "how to use linux", body: "go to linux.org"});
      let result = await db.findMany({ title: "how to use linux" });
      console.log(result);
      this.response.body = "hi";
      throw Error;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  }
}