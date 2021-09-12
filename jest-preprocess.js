const babelOptions = {
  presets: [
    "@babel/preset-react",
    "babel-preset-gatsby",
    "@babel/preset-typescript",
  ],
};

// @ts-ignore
module.exports = require("babel-jest").default.createTransformer(babelOptions);
