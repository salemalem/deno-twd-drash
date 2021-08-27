[![powered-by-drash](https://img.shields.io/badge/powered%20by-drash-brightgreen.svg?logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAqFBMVEUAAAAcjjk5qjn/AAAzmWb/AADbtgelCgrhBQoPndK7VwqZBgkrhjVtrnzgnQcQsO0XibMokTXxAwXxAwUWjLcWjLmGBATLBwb/AACKBAQQruj00QHSBweLwm6Mwm4ln3gspzpSUR//AAC6KAgrpj14GQyqBwelBwoQruvzzwInnTQjm3/VWgcQn9XavAYQntOJBAThBwkqhzUyskBKWSSnCArZugbhBwnEMechAAAAMnRSTlMACQkJDxEjMzNET1pldZKbm6SnqKurq6ursLG7v8HBwsPExcjJzNDS1NTW4OPt7e/w8+r9Fr8AAABkSURBVHjaVccDFgMxAADRGLWV2knt+5+sy2ie5gMXBmF0FGkdUXRi/rp250rpxmNq2Zzp6/c8dDzWWWXjOLlIwD97y94t5WFs2epLUL0PHE9bY1Y7y8XrtWw/37WSBCEE09JNAFkaBzkb5U0ZAAAAAElFTkSuQmCC)](https://drash.land/drash)

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![deno version](https://img.shields.io/badge/deno-%5E1.13.2-lightgrey?logo=deno)](https://github.com/denoland/deno)

# deno-twd-drash
blog powered by Tailwind CSS + Drash as a Deno framework
## Install <a href="https://github.com/kt3k/twd">twd</a>
```cmd
deno install --allow-read=. --allow-write=. --allow-net=deno.land,esm.sh,cdn.esm.sh -fq https://deno.land/x/twd@v0.4.8/cli.ts
```

## index.html
write tailwind components with classes as it's written in this repo.

Link css to styles.css or name as you want with .css
This css will be used to output tailwind.
Because Tailwind doesn't download all css, rather downloads only used classes each time due to large file size, we need to write the following command to extract cdn tailwind to styles.css
```
twd -w index.html -o styles.css
Output: 
Using default settings. You can optionally configure it by 'twd.ts' config file.
Writing styles to file 'styles.css'
Builtin 89ms
```

-w flag is used to watch file changes instead of reexecuting the command each time.