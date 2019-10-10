import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Main";
import { Section } from "./Section";
import { NavBar } from "./NavBar";

const sections = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }];

function App() {
  const handleButtonClick = sectionId => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main>
          <NavBar sections={sections} onButtonClick={handleButtonClick} />
          {sections.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </Main>
      </div>
    </React.StrictMode>
  );
}

export default App;
