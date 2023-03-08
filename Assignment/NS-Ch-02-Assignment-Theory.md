Alt-H1 Theory Assignment:

##  What is `NPM`?
NPM doesn't stand for Node Package Manager but we use it to manage our packages. It's our largest software registry with lots of packages where we can share and borrow packages from all over the world. We can manage private development. It consists of three components
	1. The website
	2. Command line interface(CLI)
	3. Registry

## What is `Parcel/Webpack`? Why do we need it?
<<<<<<< HEAD
  * Parcel and webpack are bundlers. 
  * Bundler is a development tool that combines many JS code files and merges and bundles them into a single one. This file is production ready loadable in the browser. Loads the entire app at once.
  * Parcel and webpack are used mostly for JS or typescript code that helps us to minify, clean and compact our code to send a request and receive a response from the server for loading our app. It reduces time to transer data to and from the server. They remove unnecessary comments, new lines, block delimiter and white space without changing the functionality of our code. There are many differences between them as well. 
  * Parcel is zero config  whereas webpack requires separate config file. Parce has tree shaking whereas webpack doesn't. Parcel doesn't have code splitting whereas webpack has code splitting because of lazy loading. Hot Module Replacement is built in for Parcel. We need to add HMR as a plugin for webpack. Parcel has problem of live reloading functionality. hooks, middleware. Webpack provides live reloading with help of webpack-dev-server plugin.
=======
	Parcel and webpack are bundlers. Bundler is a development tool that combines many JS code files and merges and bundles them into a single one. This file is production ready loadable in the browser. Loads the entire app at once.Parcel and webpack are used mostly for JS or typescript code that helps us to minify, clean and compact our code to send a request and receive a response from the server for loading our app. It reduces time to transer data to and from the server. They remove unnecessary comments, new lines, block delimiter and white space without changing the functionality of our code. There are many differences between them as well. Parcel is zero config  whereas webpack requires separate config file. Parce has tree shaking whereas webpack doesn't. Parcel doesn't have code splitting whereas webpack has code splitting because of lazy loading. Hot Module Replacement is built in for Parcel. We need to add HMR as a plugin for webpack. Parcel has problem of live reloading functionality. hooks, middleware. Webpack provides live reloading with help of webpack-dev-server plugin.
>>>>>>> d3b4cdbe651025aa81a74b84485216582f5ba032

## What is `.parcel-cache`
  Everything Parcel does is cached . When parcel builds Parcel-cache stores info about our project like bundling, optimizing, resolution, transformation etc. When it rebuilds, dev server restarts instantly and it doesn't have to re-parse or re-analyze the same code. The same code is never built twice. And it should be added to .gitignore.

## What is `npx` ?
  NPX stands for Node Package Executive. NPX is a packgare runner tool that comes with npm. 

## What is difference between `dependencies` vs `devDependencies`
<<<<<<< HEAD
  * Dependencies and dev dependencies are objects in package.json file. 
  * Dependencies consists of all the packages that are needed in our project with version number. Whenever we install any library required for our project, we can see that library in dependencies object.
  **syntax**: `npm install <package name>`
  * Dependencies are installed transitivily. If A requires B, and B requires C, then C gets installed. Otherwise B could not work and and neither would A.

  * Dev dependencies consists of all the packages that are used in our project in its development phase and not in  production or testing environment with its version number. Whenever we install any library which requires only development phase, we can find it in dev dependencies object. 
  **syntax**: `npm install <package name> --save-dev`
  * Devdependencies is not installed transitively. Eg. We dont need to test B to test A, so B's testing dependencies can be left out.

=======
  Dependencies and dev dependencies are objects in package.json file. 
  Dependencies consists of all the packages that are needed in our project with version number. Whenever we install any library required for our project, we can see that library in dependencies object.
syntax: npm install <package name>
Dependencies are installed transitivily. If A requires B, and B requires C, then C gets installed. Otherwise B could not work and and neither would A.
  Dev dependencies consists of all the packages that are used in our project in its development phase and not in production or testing environment with its version number. Whenever we install any library which requires only development phase, we can find it in dev dependencies object. 
syntax: npm install <package name> --save-dev
Devdependencies is not installed transitively. Eg. We dont need to test B to test A, so B's testing dependencies can be left out.

>>>>>>> d3b4cdbe651025aa81a74b84485216582f5ba032
## What is Tree Shaking?
  Tree shaking is the concept of removing dead or unwanted codes in our production build.It relies on the import and export statements to detect ifcode modules are exported and imported for use between JS files.

## What is Hot Module Replacement?
  HMR or Hot module replacement automatically updates modules in the browser at runtime without refreshing the page. It supports both HTML and CSS. The way HMR works is there is a file watcher algorithm  written in C++. The algorithm keeps track of all the files that are changing in realtime  and it tells the server to reload. All these are done by Parcel.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
<<<<<<< HEAD
    ### Superpowers of Parcel are: 
      * Hot Module Replacement(File Watcher Algorithm)
      * Zero Config, 
      * Bundling, 
      * Minifying, 
      * Cleaning our code, 
      * Caching
      * Image Optimization, 
      * Compression
      * Superfast build algorithm, 
      * Consistent Hashing algorithm
      * Dev and production build, 
      * HTTPS on dev, 
      * Manages port number, 
      * Creates a server

     **Dev Server** : Parcel has a built in server which gets automatically started when we run parcel command.
      "parcel server". It starts server by default at port number 1234. 

      **Caching**: Parcel needs space for running, and it creates caches. Parcel caches everythind it builds to the disk. If we restart the server, Parcel will only rebuild the ones that have changes from the previous build. By default these caches are stored in parcel-cache folder in our project.This should be added to git ignore
      so that it is not committed in our repository.

      **Hot Module Replacement**: It will keep track of all the files we are updating with the help of file watcher algorithm. It is a very fast watcher written in C++ which integrated with the low level functionality of each OS. Using this watcher Parcel watches all the files in our root folder and node modules. Based on the these events from the files, Parcel will determine which files needs rebuilding.


## What is `.gitignore`? What should we add and not add into it?
    * Gitignore is a folder meant for git repository. Files pushed into gitignore are meant to ignore the files inside it intentionally  so that our repository will skip these files while commiting our project.  
    * Anything we generate on server is put inside git ignore. Parcel-cache should be pushed into git ignore.We should not add files that needs to be commited in our project inside git ignore.

## What is the difference between `package.json` and `package-lock.json`?
  * package.json contains basic information of the project whearas package-lock.json describes the exact tree generated. The tree allows us to have a identical tree on subsequent installs.
  * package.json is mandatory for every project. package-lock.json is generated automatically for operations where npm modifies either the node modules tree or package.json.
  * package.json contains information like name,version,license description, author, keywords, script and dependencies. package-lock.json contains name, dependency and locked version of project.
  * package.json gets created using npm init or manually writing necessary details inside the file.package-lock.json gets created automatically when we install npm.
  * package.json stores the minimum version required by our program. If we upgrade the versions of a certain package, the change will not be shown here. package-lock.json keeps track of the exact version of each installed package by allowing us to reinstall it. When we reinstall it, it will generate the same dependancy tree. 
=======
    Superpowers of Parcel are: 
    ..*Hot Module Replacement(File Watcher Algorithm)
    ..*Zero Config, 
    ..*Bundling, 
    ..*Minifying, 
    ..*Cleaning our code, 
    ..*Caching
    ..*Image Optimization, 
    ..*Compression
    ..*Superfast build algorithm, 
    ..*Consistent Hashing algorithm
    ..*Dev and production build, 
    ..*HTTPS on dev, 
    ..*Manages port number, 
    ..*Creates a server

    **Dev Server** : Parcel has a built in server which gets automatically started when we run parcel command.
    "parcel server". It starts server by default at port number 1234. 

    **Caching**: Parcel needs space for running, and it creates caches. Parcel caches everythind it builds to the disk. If we restart the server, Parcel will only rebuild the ones that have changes from the previous build. By default these caches are stored in parcel-cache folder in our project.This should be added to git ignore
    so that it is not committed in our repository.

    **Hot Module Replacement**: It will keep track of all the files we are updating with the help of file watcher algorithm. It is a very fast watcher written in C++ which integrated with the low level functionality of each OS. Using this watcher Parcel watches all the files in our root folder and node modules. Based on the these events from the files, Parcel will determine which files needs rebuilding.


## What is `.gitignore`? What should we add and not add into it?
    Gitignore is a folder meant for git repository. Files pushed into gitignore are meant to ignore the files inside it intentionally  so that our repository will skip these files while commiting our project.  
    Anything we generate on server is put inside git ignore. Parcel-cache should be pushed into git ignore.We should not add files that needs to be commited in our project inside git ignore.

## What is the difference between `package.json` and `package-lock.json`?
  ..*package.json contains basic information of the project whearas package-lock.json describes the exact tree generated. The tree allows us to have a identical tree on subsequent installs.
  ..*package.json is mandatory for every project. package-lock.json is generated automatically for operations where npm modifies either the node modules tree or package.json.
  ..*package.json contains information like name,version,license description, author, keywords, script and dependencies. package-lock.json contains name, dependency and locked version of project.
  ..*package.json gets created using npm init or manually writing necessary details inside the file.package-lock.json gets created automatically when we install npm.
  ..*package.json stores the minimum version required by our program. If we upgrade the versions of a certain package, the change will not be shown here. package-lock.json keeps track of the exact version of each installed package by allowing us to reinstall it. When we reinstall it, it will generate the same dependancy tree. 
>>>>>>> d3b4cdbe651025aa81a74b84485216582f5ba032

## Why should I not modify `package-lock.json`?
 We should not modofy package-lock.json because it could break the synchronization between package.json and package.lock.

## What is `node_modules` ? Is it a good idea to push that on git?
 Node module is like database for npm. Whenever we install something, it gets installed in node modules.  Its a very bad idea to push node_modules on git. package-lock can regenerate node modules for us. package lock is maintaing each and every detail availbe in node module. We can generate node modules on server with the help of package-lock.json file.

## What is the `dist` folder?
  dist folder keeps the file minified for us. dist is development build. "npx parcel index.html" will create faster development version of our project and serves it on server. It creates development build for us and host it on server. To make production build "npx parcel build index.html" It will push all the build into dist folder. Build creates 3 files. Parcel bundles everything, minifies it and stores 3 files inside dist folder. The three files are "index.jhtml", "index.js","index.css". When it minifies, parcel removes console.log code. 

## What is `browserlists`?
  Browserlists is installed by parcel to us. It makes oure code compatible for specified older browsers. We can specify what kind of browser, what kind of versions needs to be supported in package.json file. 
## Read about dif bundlers: vite, webpack, parcel
  Parcel is a zero configuration web application bundler that is fast and easy to use.
  Webpack is a module bundler that bundles JavaScript files for usage in a browser.
  Vite is a web-based IDE that is designed to be a fast and lightweight alternative to traditional IDEs. It is a cloud-based IDE that runs on any device and is accessible from any browser.

  Consider Parcel if you want a fast and easy to use bundler for your web application.
  Consider webpack if you want a bundler that can bundle your JavaScript files for usage 
  in a browser.
  Consider Vite if you want a lightweight IDE that is accessible from any browser.

## Read about: ^ - caret and ~ - tilda
  ^ Caret is used for updating minor/patch versions without incrementing major version. It is compatible with version. Ex. ^2.3.4 will use release from 2.3.4 to <3.0.0
  ~Tilde is approximately equivalent to version. It will update all future patch versions without incrementing minor version. Ex. ~1.2.3 wil use release from 1.2.3 to <1.3.0

## Read about Script types in html (MDN Docs)
  It contains a single value i.e media_type which specifies the MIME type of script.
  Common “media_type” values are: 
  text/javascript (this is default)
  text/ecmascript
  application/ecmascript
  application/javascript