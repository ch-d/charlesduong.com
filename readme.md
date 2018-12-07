Static HTML export
------------------

<p><details>
  <summary><b>Examples</b></summary>
  <ul><li><a href="./examples/with-static-export">Static export</a></li></ul>
</details></p>

This is a way to run your Next.js app as a standalone static app without any Node.js server. The export app supports almost every feature of Next.js including dynamic urls, prefetching, preloading and dynamic imports.

### Usage

Simply develop your app as you normally do with Next.js. Then create a custom Next.js [config](https://github.com/zeit/next.js#custom-configuration) as shown below:

```js
// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } }
    }
  },
}
```

In that, you specify what are the pages you need to export as static HTML.

Then simply run these commands:

```sh
next build
next export
```

For that you may need to add a NPM script to `package.json` like this:

```json
{
    "scripts": {
        "build": "next build && next export"
    }
}
```

And run it at once with:

```sh
npm run build
```

Then you've a static version of your app in the “out" directory.

> You can also customize the output directory. For that run `next export -h` for the help.

Now you can deploy that directory to any static hosting service. Note that there is an additional step for deploying to GitHub Pages, [documented here](https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages).

### Deploy to S3

```sh
yarn build &&
yarn export &&
aws s3 sync out/. s3://work.charlesduong.com
```

### Deploy to Netlify
Make changes off of `work` branch
```sh
yarn netlify-deploy
```

```sh
git push && 
git checkout master &&
git merge work &&
git push &&
git checkout work
```