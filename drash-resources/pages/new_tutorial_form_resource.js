// About us page
import { Drash } from "../../dependencies.js";
import { tutorialsDB } from "../../database/database.js";
import { decodeQueryParam } from "../../utilities/decode_query_param.js";
import { slugify } from "../../utilities/slugify.js";

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
      let rawSlug = decodeQueryParam(this.request.getBodyParam("slug"));
      let slug = slugify(rawSlug);

      const tutorial = {
        title:               decodeQueryParam(this.request.getBodyParam("title")),
        description:         decodeQueryParam(this.request.getBodyParam("description")),
        slug:                slug,
        body:                decodeQueryParam(this.request.getBodyParam("body")),
        published_unix_time: Date.now(),
      };
      await tutorialsDB.insertOne({
        title:       tutorial.title,
        description: tutorial.description,
        slug:        tutorial.slug,
        body:        tutorial.body,
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