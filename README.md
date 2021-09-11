[![deno version](https://img.shields.io/badge/deno-%5E1.13.2-lightgrey?logo=deno)](https://github.com/denoland/deno)    [![powered-by-drash](https://img.shields.io/badge/powered%20by-drash-brightgreen.svg?logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAqFBMVEUAAAAcjjk5qjn/AAAzmWb/AADbtgelCgrhBQoPndK7VwqZBgkrhjVtrnzgnQcQsO0XibMokTXxAwXxAwUWjLcWjLmGBATLBwb/AACKBAQQruj00QHSBweLwm6Mwm4ln3gspzpSUR//AAC6KAgrpj14GQyqBwelBwoQruvzzwInnTQjm3/VWgcQn9XavAYQntOJBAThBwkqhzUyskBKWSSnCArZugbhBwnEMechAAAAMnRSTlMACQkJDxEjMzNET1pldZKbm6SnqKurq6ursLG7v8HBwsPExcjJzNDS1NTW4OPt7e/w8+r9Fr8AAABkSURBVHjaVccDFgMxAADRGLWV2knt+5+sy2ie5gMXBmF0FGkdUXRi/rp250rpxmNq2Zzp6/c8dDzWWWXjOLlIwD97y94t5WFs2epLUL0PHE9bY1Y7y8XrtWw/37WSBCEE09JNAFkaBzkb5U0ZAAAAAElFTkSuQmCC)](https://drash.land/drash)     [![EtaJS](https://img.shields.io/badge/Powered%20By-Eta-brightgreen?style=flat-square)](https://github.com/eta-dev/eta)     [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://github.com/kt3k/twd)
# deno-twd-drash
Blog engine powered by Tailwind CSS + Drash as a Deno framework

## Required tools to install before customisation
If you want to customize the server for your needs, you need to install required tools, which is explained in [this wiki page](https://github.com/salemalem/deno-twd-drash/wiki/Installing-required-tools-before-running-the-server)

## How to run
```cmd
denon start
```
or
```cmd
deno run --unstable -A server.js
```
#### for testing dist
```cmd
deno run -A ship_to_dist.js
```

## Directory Structure
```
.
├── drash-resources/        # Resources that Drash uses, controller analog in express.js
├── public/                 # Static files: CSS and ETA template lang.
├── server.js               # Deno server file, also known as app.js
├── dependencies.js         # known as deps.js in Deno. All dependencies are centralized here
├── scripts.json            # Used for Denon watcher configuration
├── LICENSE                 # MIT License
└── README.md               # tutorial on how to install and run
```
