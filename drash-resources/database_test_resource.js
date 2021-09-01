import { Drash } from "../dependencies.js";

export class DatabaseTestResource extends Drash.Http.Resource {

  static paths = [
    "/database_test"
  ];

  GET() {
    try {
      this.response.body = `Hello World! (on ${new Date()})`;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  }
}