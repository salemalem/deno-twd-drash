// About us page
import { Drash } from "../../dependencies.js";


export class AboutResource extends Drash.Http.Resource {

  static paths = [
    "/about",
    "/about_us",
    "/team"
  ];

  async GET() {
    try {
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/about",
        {
          page_title: "About",
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