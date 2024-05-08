import React from "react";
import Navigation from "../Navigation";

function TestPage1() {
  return (
    <>
      <Navigation />
      <section className="heading">
        <h1>Coming Soon!</h1>
      </section>

      <section className="content">
        <p>
          This is a test page. You can use this page to test your components
          before integrating them into the main application.
        </p>
      </section>
      
    </>
  );
}

export default TestPage1;
