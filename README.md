[![NPM](https://nodei.co/npm/lazyloader-cmsplugin.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lazyloader-cmsplugin/)

# LazyLoader for contentstack-express


### Table Of Contents
- [Installation](#installation)
- [Native Libraries](#native-libraries)
- [Usage](#usage-instructions)
- [Inject Plugin](#inject-plugin)
- [Demo](#demo)
- [Points To Be Remembered](#some_points_to_be_remembered)
- [Todos](#todos)


### Version
1.0.1

Google Alike Image Utility Plugin for showing the image related  background color till the image is been loaded properly.
Lazyloader is contentstack-express plugin developed for better user experience on website. This plugin will automatically predict the dominant color used in your image and set a background color till the image has been loaded completely same as Google does it for its Images.

### Installation

LazyLoader requires [Node.js](https://nodejs.org/) v4+ to run.

Download and extract the [latest pre-built release](https://github.com/kailashyogeshwar85/lazyloader/releases).

Install the native dependencies for Linux system before using the plugin and start the server.

### Native Libraries

```sh
$ sudo apt-get install libcairo2-dev libjpeg-dev libgif-dev libpango1.0-dev
$ cd your_cms_project/plugins
$ npm install lazyloader-cmsplugin --save
```
### Usage Instructions
```html
 <!-- Just Add the filter name suffic your image url -->
 <div class="image-wrapper" {{getAssetUrl(imagepath) | imagecolor}}>
  <!-- actual image -->
  <img src={{getAssetUrl(imagepath)}} alt="image1">
 </div>
```

### Inject Plugin
``` js
//config/staging.js or config/production.js
module.exports = exports = {
    "theme": "basic",
    "storage": {
     ...
     ...
    }
    "plugins":{
      "lazyloader-cmsplugin":{}
    }
}
```

### Demo
You can visit the site of Built.io for Implementation [Demo](https://www.built.io/blog/).

### Some Points to be Remembered
 - Some of the native libraries mentioned above may not be supported in Windows System and your npm install may be failed.
 - As you may  included the above nunjucks filter in markup so it would expect the filter to be existed in one of your plugins.
 - Plugin expect you to have your content folder in staging and production environment level as per the standards.
 - Plugin Doesn't support functionality for static image files in your public directory will be available in furutre release.

### Snippet Example For Point number 2
``` js
   ViewHelper.templateExtends = function(engine) {
    engine.getEnvironment().addFilter("imagecolor", function(url) {
          return "";
      });
   };
```

More details coming soon.


### Todos

 - Write Tests
 - Add Code Comments
 - Add suuport for images in static directory too.

License
----

MIT


**Free Software, Hell Yeah!**
