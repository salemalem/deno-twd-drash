// Index page
import { Drash } from "../dependencies.js";
export class SavingRenderAsHtmlResource extends Drash.Http.Resource {
  static paths = ["/test/saving_render_as_html"];

    async GET() {
      try {
        let htmlFile = await this.response.render(
          Deno.cwd() + "/public/views/index",
          {
            page_title: "Home",
            tutorials: [
              {
                title: "How to install Linux",
                description: "A tutorial on how to install Linux on your computer.",
                slug: "how-to-install-linux",
                date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'}),
              },
              {
                title: "How to install Windows",
                description: "A tutorial on how to install Windows on your computer.",
                slug: "how-to-install-windows",
                date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'}),
              },
              {
                title: "How to install ChromiumOS",
                description: "A tutorial on how to install ChromiumOS on your computer.",
                slug: "how-to-install-chromiumos",
                date: new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: '2-digit'}),
              },
            ]
          },
        );
        console.log(htmlFile);
        Deno.writeTextFileSync(`${Deno.cwd()}/generated.html`, htmlFile);
        this.response.body = "html is generated";
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error reading ETA template.`
      );
    }
    return this.response;
  }
}
