// About us page
import { Drash } from "../dependencies.js";
import { tutorialsDB } from "../database/database.js";


// parsing %23%20hello%20world to ! hello world
function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}

export class NewTutorialFormResource extends Drash.Http.Resource {

  static paths = [
    "/tutorials/new",
    "/tutorial/new",
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
        title:               decodeQueryParam(this.request.getBodyParam("title")),
        description:         decodeQueryParam(this.request.getBodyParam("description")),
        slug:                decodeQueryParam(this.request.getBodyParam("slug")),
        body:                decodeQueryParam(this.request.getBodyParam("body")),
        published_date:      new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'}),
        published_unix_time: Date.now(),
      };
      await tutorialsDB.insertOne({
        title:       tutorial.title,
        description: tutorial.description,
        slug:        tutorial.slug,
        body:        tutorial.body,
        published_date:   tutorial.published,
        published_unix_time: tutorial.published_unix_time,
      });
      return this.response.redirect(301, `/tutorials/${tutorial.slug}`);
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error while post request.`
      );
    }
  }
}