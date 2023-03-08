**NR-CH-05-THEORY-ASSIGNMENT**
## What is the difference between Named Export, Default Export, * as Export?
 **  Named Export: ** With named Export, we can export multiple exports per file direcly by name. While importing we have to import using curly braces`{}`.
 ** Default Export: ** With default export we can export only one export per file. we dont require curly braces for default export.
   the naming of import is completely independent in default export and we can use any name we like.
   Example: 
   `` With * As , It Imports All The Named Exports Onto An Object.``
    Example:
   ` Import * As Obj From "./Components/Header";`
    `Obj.Title `

## What is the importance of config.js file?
   We put all the hardcoded stuffs in this file. Config file can also be named as constants.js file in some companies.
   It helps in maintainability of code.

## What are React Hooks?
   React hooks are nothing but a basic function. There are lot of react built in hooks. 
   State variables are created using useState hook. UseState comes as a named export form react library.

## Why do we need a useState Hook?
We need useState whenever we want to create a state.
State variables are created using useState hook. UseState comes as a named export form react library.
 We import usestate as named import. In react we cannot modify directly. To modify variables, we can only modify using function. Usestate gives us that function. setVariableName. Ex: `setSearchText`
setvariablename
`const [searchText, setSearchText] = useState("KFC")`
useState takes parameter of default value to the variable. Here KFC is the default value of searchText.