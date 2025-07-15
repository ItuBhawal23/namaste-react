import React from "react";
import ReactDOM from "react-dom/client";

// ! using Core React

const heading = React.createElement("h1", null, "Namaste React 🚀");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// ! Using JSX

const jsxHeading = <h1 className="heading">Namaste React by JSX 🚀</h1>;

// JSX ( transpiled before it reaches JS Engine) -> PARCEL -> Babel (JS compiler)
// jsxHeading(JSX) converted to React.createElement by Babel => ReactElement- JS object => HTML Element(rendered)

root.render(jsxHeading);

// ! React Component [ Everything in React is Component ]

// * Class Based Component - OLD
// * Functional Component - NEW - Just JS function that returns JSX

const ChildComponent = () => <h3>I am Child Component</h3>;

const HeaderComponent = () => {
  return (
    <div>
      <h1 className="header">Header Component as Functional Component 🚀</h1>
      {/*  Babel transpile the JSX returned by the React Component to React.createElement which is
      then converted to HTMLElement when rendered */}
      {/* Component Composition */}
      <ChildComponent />
      <ChildComponent></ChildComponent>
      {ChildComponent()}
    </div>
  );
};

root.render(<HeaderComponent />);
