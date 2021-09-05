import { Drash } from "../dependencies.js";
import * as rimu from "https://deno.land/x/rimu@11.1.14/mod.ts";
const decoder = new TextDecoder();


export class MarkdownConverterTestResource extends Drash.Http.Resource {

  static paths = [
    "/markdown_converter_test"
  ];

  async GET() {
    try {
      let stringForMarkdown = `# hello world! \n 
<pre class="language-python"><code>print(hi)\
</code>\
</pre>`;
      let result = rimu.render(stringForMarkdown);
      this.response.body = result;
      // this.response.body = "Hello, world!";
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  }
}