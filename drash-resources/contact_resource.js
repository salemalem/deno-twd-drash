// Contact page
import { Drash } from "../dependencies.js";

export class ContactResource extends Drash.Http.Resource {

  static paths = [
    "/contact"
  ];

  async GET() {
    this.response.body = await this.response.render(
      Deno.cwd() + "/public/views/pages/contact",
      {
        page_title: "Contact",
      },
    );

    return this.response;
  }
}