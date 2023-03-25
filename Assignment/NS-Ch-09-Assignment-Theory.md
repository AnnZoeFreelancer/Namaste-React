#When and why do we need lazy()?
We have lazy for dynamic import.
Lazy comes from react library as a named import.
While importing lazy loaded file, we should not import like below:
`import instamart from "./components/instamart"; `
It should be imported in a lazy way like below in app.js file.
`instamart - lazy(()=>import("./components/instamart"));`
Here instamart is imported in a lazy way. 
In browser there will be one js bundle file only. But after using lazy, we will have another js bundle for instamart page when it gets loaded. 
`Lazy loading` is also known as 
`code splitting` `bundle chunking` `dynamic bundling` `on-demand loading` `dynamic import`

#What is suspense?

#Why we got this error ?
> `A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?```

When we loaded instamart, it is a different bundle. It takes time to load the script. So meanwhile react tries to render it. It is rendering something which is not there. So react suspends the rendering, so we got error.
It is Single Page Application.
`Upon on demand loading => upon render => suspend loading`
#How to handle it?
We use something known as **suspense**.
`import{lazy,suspense} from "react";`
In create browser router,


    path:"/instamart",
    element:(
        <suspense>
            <Instamart></Instamart>
        </suspense>
    )

Now it works when you load the page.
When you write suspene, react takes care of these components in different fashion.
`const Instamart - lazy() =>import("./components/Instamart")); `
This is a promise. React will wait for this promise to resolve.
There will be a time delay for this promise to resolve. We should show a shimmer. React takes a prop which is known as **fallback**
In this fallback, you can pass in whatver you need to show untill and unless instamart is available.
import shimmer and when you load you can see shimmer as fallback UI.

> Never lazyload inside a component.  because this will be lazy loaded after every render cycle. 
If we have to lazyload our footer. dont write inside component. 
Lazyload where you  are importing it. and import it on top only. 

#Advantages and disadvantages of using this code splitting pattern?
##Advantages
Code splitting is a way to split up your code from a large file into smaller code bundles. These can then be requested on demand or in parallel.

1.**Code splitting using Webpack dynamic import syntax**
`import(“module_name”).then({ default } => // do something)`
2.** Code splitting using React.Lazy and suspense**


    import React, { Suspense } from 'react';
    
    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }

##Disadvantages
The only drawback about code splitting is that you can only use it in client side rendering.
Both the above techniques won't work during server side rendering when it comes to React .  This is the reason why the React team recommends using loadable components for code splitting in the server.

#When do we and why do we need suspense? 
Suspense is a new React feature that was introduced in React 16.6. It aims to help with handling async operations by letting you wait for some code to load and declaratively specify a loading state (like a spinner) while waiting.
It allows you to defer rendering part of your application tree until some condition is met.
When we want to lazy load the component without throwing error, we use suspense and fallback.

