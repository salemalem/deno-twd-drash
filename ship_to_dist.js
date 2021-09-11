import * as Eta from "https://deno.land/x/eta@v1.12.3/mod.ts";

var myTemplate = "Hi, my name is <%= it.name %>"
var compiled = Eta.compile(myTemplate)
console.log(compiled({ name: "Johnny Appleseed" }, Eta.config))