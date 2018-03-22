# Farm Animals

Built in Phaser using [phaser-es6-webpack](https://github.com/lean/phaser-es6-webpack.git)

## Build:

  * Install node.js and npm:
  * Run: `npm install` or `yarn`

## Run the development server:

Run:

```npm run dev```

This will run a server so you can run the game in a browser. It will also start a watch process, so you can change the source and the process will recompile and refresh the browser automatically.

To run the game, open your browser and enter http://localhost:3000 into the address bar.


## Build for deployment:

Run:

```npm run deploy```

This will optimize and minimize the compiled bundle.

## Config:
before you get to work you will surely want to check the config file. You could setup dimensions, webfonts, etc

## Webfonts:
In the config file you can specify which webfonts you want to include. In case you do not want to use webfonts simply leave the array empty

## Notes on building new projects with phaser-es6-webpack

  * `git clone https://github.com/lean/phaser-es6-webpack.git`
  * change the name of the directory and cd in
  * `git remote set-url origin git@github.com:[you/new-repo].git`
  * copy .eslintrc.json
  * copy this README
  * `npm install`

