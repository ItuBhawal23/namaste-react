import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
        <div id="child">
            <h1></h1>
            <h1></h1>
        </div>
        <div id="child2">
            <h1></h1>
            <h1></h1>
        </div>
    </div> */
}

// SYNTAX : React.createElement( tag, {attr(s): "", ...}, child | [children] )

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag")
  ])
]);

// To fix this messy syntax => JSX (comes into picture)

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);
console.log(heading); // returns a ReactElement (JS obj)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // render method convert the ReactElement(obj) into a h1 tag and placed inside the root
// if root has some elements inside that will get replaced with the ReactElement(obj)
root.render(parent);
