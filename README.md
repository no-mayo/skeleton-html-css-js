# skeleton-html-css-js

## Software and Versions

* Webpack (for Sass & ES6)

## System Dependencies

None yet.

## Environment Variables

None yet.

## Additional Services (Background Workers, APIs, etc)

None yet.

## Running This Project For the First Time

```bash
  $ git clone git@github.com:no-mayo/skeleton-html-css-js.git
  $ cd skeleton-html-css-js
  $ npm install # to install JS dependencies from package.json
  $ npm run watch # so webpack will watch the sass & js files
  $ http-server # in another terminal tab, to run a basic local server
```

You can then visit `localhost:8080` in your browser.

## Running The Test Suite

None yet.

## Deployment: Staging

As a client-side-only, "single page" application, this project can be deployed as static HTML, CSS and JS to a free service like GitHub Pages or Netlify.

**Important:**
Only the contents of the `/dist` folder need to be deployed, if you don't want to have to navigate to `yoursite.com/dist` when viewing the website.

To push the contents of the `/dist` folder to a `gh-pages` branch in your GitHub repository:

1. Make sure the `/dist` folder is not in your `.gitignore` file
2. `git add dist && git commit -m "Initial dist subtree commit"`
3. Use a subtree push: `git subtree push --prefix dist origin gh-pages`

## Deployment: Production

There is no separate production environment for this project yet. See the instructions above for staging deployment.
