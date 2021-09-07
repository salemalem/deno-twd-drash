import { Drash } from "../dependencies.js";

const decoder = new TextDecoder();

export class PricingResource extends Drash.Http.Resource {

  static paths = [
    "/pricing"
  ];

  async GET() {
    this.response.body = await this.response.render(
      Deno.cwd() + "/public/views/pages/pricing",
      {
        page_title: "Pricing",
      },
    );

    return this.response;
  }
}