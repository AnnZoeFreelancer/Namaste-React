import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import Header from "./components/Header";
// import {Title} from "./components/Header"; //Named Import
/*import * as Obj from "./components/Header";
  Obj.Title;
*/
// import {Header,Title} from "./components/Header";
// import Header, {Title} from "./components/Header";
//import * as XYZ from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";


const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);