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
      await db.insertMany({key: 1, value: "one"});
      // let result = await db.findMany({ key: 1 });
      // console.log(result);
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