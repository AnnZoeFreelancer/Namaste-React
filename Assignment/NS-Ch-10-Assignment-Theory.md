#Explore all the ways of writing css.
1. Normal Native CSs
2. SCSS
3. Inline CSS
4. Component Libraries: Material UI, Base UI, Ant, Chakra
5. Styled Components
6. Tailwing CSS framework
7. Bootstrap library.

#How do we configure tailwind?
[Installation Guide Docs](http://https://tailwindcss.com/docs/guides/parcel "Installation Guide Docs")
 **1. Install Post CSS**
Post CSS is installed as a dev dependency.
Post Css is a tool for transforming CSS with JS.
We need to tell parcel that we are using tailwind.
It need another compilation to convert those classes to be read by browser.
In Terminal : `npm install -D tailwindcss postcss`

**2. Install Tailwind **
In Terminal: `npx tailwindcss init`
Once installed, `tailwind.config.js` file will be created with following content in it.
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. In **content**, we need to tell our project what files will be using the tailwind classes.
```javascript
   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
**4. Configure postcss.rc**
We need to configure our postcss using postcss.rc file
Create postcss.rc file.
```javascript
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
**6. Index.css**
In index.css we will have only 3 lines when we use tailwind css.
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```


#In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

Theme: Theme section is a place to define color palette, type scale, fonts, breakpoints, border radius values and more. 
Theme object contains keys for 'screens', 'colors' and spacing and customizable core plugin. 

Content: Utilities for controlling the content of the before and after pseudo-elements
https://tailwindcss.com/docs/content

Plugins: Extending Tailwind with reusable third-party plugins.
Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.
https://tailwindcss.com/docs/plugins

Extend: By default the spacing scale is inherited by the padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins., if you’d like to extend the default spacing scale, you can do so using the theme.extend.spacing section of your tailwind.config.js file:This will generate classes like p-13, m-15, and h-128 in addition to all of Tailwind’s default spacing/sizing utilities.

https://tailwindcss.com/docs/customizing-spacing#extending-the-default-spacing-scale

#Why do we have .postcssrc file?
We need to configure `.postcssrc` file to tell our bundler why we are bundling things up.
While building we will be using our tailwind, so compile our tailwind. This is the reason we use postcss.rc configuration.

Post css takes the config and tells our bundler(parcel), we will see lot of tailwind classes, we need to configure it that when we are bundling things up, compile tailwind css into normal css. That is the job of post css.

