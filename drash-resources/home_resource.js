import { Drash } from "https://deno.land/x/drash@v1.4.2/mod.ts";

export class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];

    async GET() {
    this.response.body = await this.response.render(
      Deno.cwd() + "/public/views/index",
      {
        message: "Hella using Eta.",
        template_engines: [
          {
            name: "dejs",
            url: "https://github.com/syumai/dejs",
          },
          {
            name: "Dinja",
            url: "https://github.com/denjucks/dinja",
          },
          {
            name: "Jae",
            url: "https://github.com/drashland/deno-drash-middleware",
          },
        ],
      },
    );

    return this.response;
  }
}
