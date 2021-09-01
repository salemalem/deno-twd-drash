import { Drash } from "../dependencies.js";
import { CasualDB } from "https://deno.land/x/casualdb@v0.1.4/mod.ts";

const db = new CasualDB();

await db.connect(Deno.cwd() + "/database/test-db.json", {
  bailIfNotPresent: true,
});
export class DatabaseTestResource extends Drash.Http.Resource {

  static paths = [
    "/database_test"
  ];

  async GET() {
    try {
      let posts = await db.get('posts');
      this.response.body = JSON.stringify(posts["data"]);
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  }
}