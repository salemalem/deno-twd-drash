// Single tutorial page template 
import { Drash } from "../dependencies.js";
import { rimu }  from "../dependencies.js";

export class SingleTutorialResource extends Drash.Http.Resource {

  static paths = [
    "/tutorials/:slug",
    "/tutorial/:slug"
  ];

  async GET() {
    try {
      const tutorialSlug = this.request.getPathParam("slug");
      console.log(tutorialSlug);
      let stringForMarkdown = "# hello world!";
      let result = rimu.render(stringForMarkdown);
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/single_tutorial",
        {
          page_title: "Single tutorial",
          first_custom_css_import: "/public/css/single_tutorial.css",
          tutorial_body: result,
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