const lazyImagesPlugin = require("eleventy-plugin-lazyimages");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    imgSelector: "img", // custom image selector
    cacheFile: "", // don't cache results to a file
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
