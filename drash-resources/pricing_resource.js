import { Drash } from "https://deno.land/x/drash@v1.5.1/mod.ts";

const decoder = new TextDecoder();

export default class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/pricing"
  ];

  GET() {
    try {
      let fileContentsRaw = Deno.readFileSync(Deno.cwd() + "/public/pricing.html");
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