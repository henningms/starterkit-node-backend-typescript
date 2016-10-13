# Starter kit for Node and Typescript

Uses Node, Express, Gulp, Typescript and Typings.

## Installing and running

```
# Make sure we have these packages globally so they're available as CLI commands
npm install gulp typing typescript --global

# Install dependencies for project
npm install
```

To run the project open the project in Visual Studio Code and hit Debug (F5) or if you're a CLI junkie:

```
gulp build
node --debug --nolazy dist/server.js
```

## Installing new Typings
Be sure to use the `--save` flag if installing from the CLI so it updates the `typings.json` file. 