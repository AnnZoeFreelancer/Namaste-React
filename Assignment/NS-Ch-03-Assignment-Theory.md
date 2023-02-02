Assignment

What is JSX?
Facebook created React to write a lot of html using JS in a better way since JS is performant. JSX is not Javascript XML and JSX is a html like syntax developed by facebook developers. It is a fancy way of writing html inside JS but it is not html inside JS. JSX has its own naming convention. JSX uses react.createElement behind the scenes. and this react.createElement is converted to object and this object is converted and rendered as html on DOM. Babel understands JSX and converts it into react.createElement.

Superpowers of JSX?
JSX has many advantages like
Readability
Lesser code, 
Maintainability,
Developer friendly,
No repetition
Sanitization

Role of type attribute in script tag? What options can I use there?

The type attribute specifies the type of the containing script between script tags.
javascript: It is the standard way of writing javascript code inside the <script> tag.
ecmascript : It follows EcmaScript standards.
module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel:When loaded in a browser, @babel/standalone will automatically compile and execute all script tags with type text/babel or text/jsx:
typescript: Its in TypeScript.
importmap: It allows us to provide a mapping. If matched will replace text in the module spceifier.
text/template: Can hold anything that are not parsed.

Javascript MIME types: 
application/javascript Deprecated
application/ecmascript Deprecated
application/x-ecmascript Non-standard
application/x-javascript Non-standard
text/ecmascript Deprecated
text/jscript Non-standard
text/livescript Non-standard
text/x-ecmascript Non-standard
text/x-javascript 

Even though any given user agent may support any or all of these, you should only use text/javascript. It's the only MIME type guaranteed to work now and into the future.

{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

We can write any piece of JS code inside curly braces {}in functional component.
{TitleComponent} will represent a react element or JS variable.
{<TitleComponent/> will represents functional component with no children.
{<TitleComponent></TitleComponent>} will represent functional components with children or content inside it.


