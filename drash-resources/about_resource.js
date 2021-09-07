// About us page
import { Drash } from "../dependencies.js";


export class AboutResource extends Drash.Http.Resource {

  static paths = [
    "/about"
  ];

  async GET() {
    this.response.body = await this.response.render(
      Deno.cwd() + "/public/views/pages/about",
      {
        page_title: "About",
      },
    );

    return this.response;
  }
}