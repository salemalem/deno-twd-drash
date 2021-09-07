// Single tutorial page template 
import { Drash } from "../../dependencies.js";
import { rimu }  from "../../dependencies.js";
import { tutorialsDB } from "../../database/database.js";

export class SingleTutorialResource extends Drash.Http.Resource {

  static paths = [
    "/tutorials/:slug",
    "/tutorial/:slug"
  ];

  async GET() {
    try {
      const tutorialSlug = this.request.getPathParam("slug");
      const foundTutorial = await tutorialsDB.findOne({ slug: tutorialSlug });
      
      if (foundTutorial == null) {
        return this.response.redirect(301, "/404");
      }
      let localeDateString = new Date(foundTutorial.published_unix_time).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'});
      let renderedTutorialBody = rimu.render(foundTutorial.body);
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/single_tutorial",
        {
          page_title: foundTutorial.title,
          first_custom_css_import: "/public/css/single_tutorial.css",
          tutorial_body: renderedTutorialBody,
          tutorial_published_date: localeDateString,
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