// Index page
import { Drash } from "../dependencies.js";
export class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];

    async GET() {
    this.response.body = await this.response.render(
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

    return this.response;
  }
}
