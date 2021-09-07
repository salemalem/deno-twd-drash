import { Drash } from "../dependencies.js";


export class NotFoundResource extends Drash.Http.Resource {

  static paths = [
    "/not_found",
    "/404",
  ];

  async GET() {
    try {
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/404",
        {
          page_title: "404 | Not Found",
        },
      );
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error reading ETA template.`
      );
    }
    return this.response;
  }
}