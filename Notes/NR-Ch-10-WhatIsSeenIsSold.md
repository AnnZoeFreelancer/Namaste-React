Tailwind Css is one of the way to write CSS.
Normal Native CSs
SCSS
Inline CSS
Component Libraries: Material UI, Base UI, Ant, Chakra
Styled Components
Tailwing CSS framework
Bootstrap library.

Other ways of writing CSS are 
1. Normal Native css.
2. Scss and sass make the css writing experience good.

Advantage of scss over normal css is nesting, mixins, reusability, variables

3. Inline css with variable name:

const searchBtnCss = {
    background-color:red,
}
<button style= {searchBtnCss}/>

Inline css 
Passing in javascript object inside JSX. 
JSX is {} using js object will become {{}}

<button style = {{background-color:red}}/>

Disadvantages of inline style
It is not good way because it is hardcoded. 
It is difficult to maintain.
We cant reuse this classes.

4. Using component libraries like 
Material UI. 
HW: Created by whom? Hai Nguyen.
Maintaed by? Material-UI is maintained by a group of invaluable core contributors, with the massive support and involvement of the community.
It is a fully loaded component library. It has lot of prebuilt components already styled. 

Base UI - Uber used base UI
Ant Design UI 
Chakra UI 

Pros and cons of using libraries :
Pros: 
Easy to use 
Resusablity
Saves lot of time
Automatic theme
Built in components 
Consistent UI
It takes care of responsiveness

Can we use two cSS framework in one project? Yes we can use.
At end of the day all are packages. We can use multiple package. 
But should we use mulitple? No we should not use it.
It is not a good practice to use. 
It should look uniformity.

Cons :
Bundle size. It makes bundle size heavy.
we lose lot of control of how it looks. Personal customization becomes hard.
Ex: date time picker. Library restricts you in some way.

6. Styled-components - 
When we code in react, we write html code in jsx. We brought html and css inside js.  
Long time back we had separate file for html, css and js.
Styled components came in to write css in js. passing in css as props. 
Cons: 


Tailwind CSS framework. 
Tailwind is a opensource CSS framework.
It comes with a mix of things.
Pros: 
CSS on the go ( in same file) No need to toggle with css file.
Reusability
Less bundle size
Flexible UI(Gives control of customization)

using CDN 
<script src="https://cdn.tailwindcss.com"></script>

<h1>Hellow World</h1>

When you start using tailwind css, it changes the normal behaviour of lot of tags.  How? 
Whenever you use tailwind css, write it in my way. Write it in tailwind style.
Normally links will be shown with underline and blue color. Tailwind  removes them.
It overrides everything. 
Every sytle you write will be a tailwind classname.


How to use tailwind?
Instal tailwind
Install tailwind with parcel 
https://tailwindcss.com/docs/guides/parcel

We will also have to install post css. 
What is post css?  It is installed as a dev dependency
Post Css is a tool for transforming css with JS.
We need to tell parcel that we are using tailwind. 
It need another compilation to convert those classes to be read by browser.

Install in terminal:
npm install -D tailwindcss postcss
npx tailwindcss init

npx is used to execute it directly.
You can check in package.json file. Tailwind and postcss will be there

We need to do some configuration
npx tailwind init gave us tailwind-config.js file 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Check what content, theme , extend etc means in config file.

In content, we need to tell our project what files will be using the tailwind classes.
We will be using All our components file. 


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

When it is compiling just use these files  "./src/**/*.{html,js}",

We need to configure our postcss using postcss.rc file
Create postcss.rc file. 
{
  "plugins": {
    "tailwindcss": {}
  }
}

Why? Here we need to configure this to tell our bundler why we are bundling things up. 
While building we will be using our tailwind, so compile our tailwind. This is the reason we use postcss.rc configuration.

Post css takes the config and tells our bundler(parcel), we will see lot of tailwind classes, we need to configure it that when we are bundling things up, compile tailwind css into normal css. That is the job of post css.

In index.css we will have only 3 lines when we use tailwind css.
@tailwind base;
@tailwind components;
@tailwind utilities;
We are telling we are using classes from tailwind base library.
 
It is a way of tailwind to work. 

To give the values precisely as width:123px
className = "w-[123px]"

You can convert css to tailwind css in this website
https://tailwind-converter.netlify.app/

We get a css file, parcel is doing this and it is taking the help of postcss and tailwind library to compile all those classes and ship it into our project.
Tailwind css has 1000s of classes. Tailwind css makes sure that only the classes that you use in the project will be made into the production. So the bundle size is very very small. What about dynamic classes? Will tailwind include it? Yes it randomly created a class in tailwind for us. It is created on the instance. Whenever you write tailwind, stick to native tailwind classes. 

If my website crosses the threshold of the small device make my header purple
sm:bg-purple-50
As and when my small device threshold crosses, change my backgound to purple. 
As soon as i cross the small device limit change the css.
for medium lets make it yellow

bg-pink-50 sm:bg-blue-50 mg:bg-yellow-500
mobile      tab             desktop

Pros of tailwind: 
It is easy to debug. 
Code is less. Easy to use.
No duplicate css.
Bundle size is small.
Time it is faster development. No need to switch between files.
It gives lot more control.
It is fast to build

We do everything inside js file. html, css, js.

Cons: 
Too much classes, 
Too much code
Not everyone will know tailwind. Every developer will take time to understand tailwind
It takes initial learning curve. New developers make time to be productive when tailwind is used. It also makes our code little uglier,it compromises readability a little. 








