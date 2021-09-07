import { Drash } from "../dependencies.js";

const decoder = new TextDecoder();

export class SingleTutorialResource extends Drash.Http.Resource {

  static paths = [
    "/tutorials/:slug",
    "/tutorial/:slug"
  ];

  GET() {
    try {
      const tutorialSlug = this.request.getPathParam("slug");
      console.log(tutorialSlug);
      let fileContentsRaw = Deno.readFileSync(Deno.cwd() + "/public/single_tutorial.html");
      let template = decoder.decode(fileContentsRaw);
      this.response.body = template;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error reading HTML template.`
      );
    }
    return this.response;
  }
}