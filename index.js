

"use strict";

var contentstack =  require('contentstack-express');
var ColorThief   = require("color-thief");
var fs           = require("fs");
var path         = require("path");
var colorThief   = new ColorThief();

module.exports = function Lazyloader() {

    var options = Lazyloader.options;


   Lazyloader.templateExtends = function(engine) {
      engine.getEnvironment().addFilter("imagecolor", function(url) {
          return getImageRGB(url);
      });
   };


   Lazyloader.serverExtends = function(app) {
   };

   Lazyloader.beforePublish = function (data, next) {
       next();
   };

   Lazyloader.beforeUnpublish = function (data, next) {
       next();
   };

  var getImageRGB = function (url){
    try{
      var _contentPath = null;
      var env = contentstack.config._config.environment;
      if(env == 'development'){
        _contentPath =  path.join(process.cwd(),"/_content/en-us", decodeURI(url));
      } else {
        _contentPath =  path.join(process.cwd(),"/../_content/en-us", decodeURI(url));
      }
      var image  = fs.readFileSync(_contentPath);
      var rgb    = colorThief.getColor(image);
      return "style=background:rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    } catch(e) {
      console.error(e);
    }
  }
};
