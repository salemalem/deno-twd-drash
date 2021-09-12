import * as Eta from "https://deno.land/x/eta@v1.12.3/mod.ts";


// TODO
// RESEARCH how to compile a file not to parse it to string
const indexEtaText = await Deno.readTextFile(Deno.cwd() + "/public/views/index.eta");
var rendered = Eta.render(indexEtaText, {
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
});
console.log(rendered);
