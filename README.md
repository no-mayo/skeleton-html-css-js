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

For now, you can push your changes from the master branch into the gh-pages branch to deploy them there:

```bash
  git push origin master:gh-pages
```

## Deployment: Production

There is no separate production environment for this project yet. See the instructions above for staging deployment.
