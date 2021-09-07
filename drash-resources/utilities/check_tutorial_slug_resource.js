import { Drash } from "../../dependencies.js";
import { tutorialsDB } from "../../database/database.js";
import { decodeQueryParam } from "../../utilities/decode_query_param.js";

export class CheckTutorialSlugResource extends Drash.Http.Resource {

  static paths = [
    "/utilities/check_tutorial_slug"
  ];

  async POST() {
    const tutorialSlug = this.request.getUrlQueryParam("slug");
    const foundTutorial = await tutorialsDB.findOne({ slug: decodeQueryParam(tutorialSlug) });
    if (foundTutorial == null) {
      this.response.body = "0";
    } else {
      this.response.body = "1";
    }
    return this.response;
  }
}