// About us page
import { Drash } from "../dependencies.js";

// parsing %23%20hello%20world to ! hello world
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}

export class NewTutorialFormResource extends Drash.Http.Resource {

  static paths = [
    "/tutorials/new",
    "/tutorial/new"
  ];

  async GET() {
    try {
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/new_tutorial_form",
        {
          page_title: "Add new tutorial",
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
  async POST() {
    try {
      const tutorial = {
        title:       decodeQueryParam(this.request.getBodyParam("title")),
        description: decodeQueryParam(this.request.getBodyParam("description")),
        slug:        decodeQueryParam(this.request.getBodyParam("slug")),
        body:        decodeQueryParam(this.request.getBodyParam("body")),
        published:   new Date(),
      };
      console.log(tutorial);
      console.log(tutorial.published.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'}));
      return this.response.redirect(301, `/tutorials/${tutorial.slug}`);
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error while post request.`
      );
    }
  }
}