import { Drash } from "../../dependencies.js";


export class PricingResource extends Drash.Http.Resource {

  static paths = [
    "/pricing"
  ];

  async GET() {
    try {
      this.response.body = await this.response.render(
        Deno.cwd() + "/public/views/pages/pricing",
        {
          page_title: "Pricing",
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