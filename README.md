# bartoszclapinski.github.io

Personal website of Bartosz Cłapiński, .NET back-end developer: projects, skills and contact.

Live: https://bartoszclapinski.github.io

## How it works

- Static site, no build step. GitHub Pages serves this repository from `main`.
- `index.html` holds the whole site: home, project pages, PL/EN, loader, mascot and the demo wake-up modal.
- `site-data.js` is the content: projects, skills, links. Edit it to change what the site shows.
- `support.js` is the runtime the page needs. Keep it next to `index.html`.
- Live demos hosted on Render's free tier sleep after 15 minutes. Opening a project page pings the demo (and any extra services listed in `wake`) so it is warm by the time someone clicks it.

## Run locally

```
python -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` straight from disk can block scripts.
