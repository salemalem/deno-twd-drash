import { Drash } from "../dependencies.js";
import { Database as AloeDB } from 'https://deno.land/x/aloedb@0.9.0/mod.ts'
import * as rimu from "https://deno.land/x/rimu@11.1.14/mod.ts";

// database initialization
const aloeTestDB = new AloeDB({
  path: Deno.cwd() + "/database/aloe-test-db.json",
  pretty: false,
});

function decodeQueryParam(p) {
  return decodeURIComponent(p.replace(/\+/g, ' '));
}


const decoder = new TextDecoder();

export class InsertToDbFromFormResource extends Drash.Http.Resource {

  static paths = [
    "/insert_to_db_from_form"
  ];

  GET() {
    try {
      let fileContentsRaw = Deno.readFileSync(Deno.cwd() + "/public/insert_to_db_from_form.html");
      let template = decoder.decode(fileContentsRaw);
      this.response.body = template;
    } catch (error) {
      throw new Drash.Exceptions.HttpException(
        400,
        `Error`
      );
    }
    return this.response;
  };
  async POST() {
    await aloeTestDB.drop();
    console.log(decodeQueryParam(this.request.parsed_body.data.body));
    await aloeTestDB.insertOne({title: this.request.parsed_body.data.title, body: decodeQueryParam(this.request.parsed_body.data.body)});
    let stringForMarkdownParsedFromDB = await aloeTestDB.findOne({title: this.request.parsed_body.data.title});
    console.log(stringForMarkdownParsedFromDB.body);
    // this.response.body = stringForMarkdownParsedFromDB.body;
    let result = rimu.render(stringForMarkdownParsedFromDB.body);
    this.response.body = result;
    return this.response;
  }
}