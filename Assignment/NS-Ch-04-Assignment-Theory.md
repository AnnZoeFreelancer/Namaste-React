Is JSX mandatory for React?
No JSX is not mandatory for react.
Is ES6 mandatory for React?
No ES6 is not mandatory for react.

 React is a library and it does not forces us to use jsx or es6 or even react. It is ease of use.
 Example: We can use react just in  a particular section of browser like header,footer, etc. since
 whole react runs inside root.We just have to make our root as footer or header.


{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
We can write any piece of JS code inside curly braces {}in functional component.
{TitleComponent} will represent a react element or JS variable.
{<TitleComponent/> will represents functional component with no children.
{<TitleComponent></TitleComponent>} will represent functional components with children or content inside it.

How can I write comments in JSX?
JSX comments are similar to JS.
// For single line comments
/*
* For Multi line comments
*/

What is <React.Fragment></React.Fragment> and <></>
React.Fragment is a component exported by React library. The one we import as react in app.js.
To use component inside JSX we use <React.Fragment/>

const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
When we use <React.Fragment> browser  will not display it as a separate div.
React.Fragment is like an empty tag.
React developers brought short hand for this , <React.Fragment></React.Fragment> is similar to <></>
const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}
We cannot pass any styles or attributes in react.fragment tag. If we want to use we have to make it a div and add style to it.
