import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Main";
import { Section } from "./Section";
import { NavBar } from "./NavBar";
import { Button } from "./Button";
import { useForceUpdate } from "./use-force-update";
import { useRefsMap } from "./use-refs-map";
import { fetchSections } from "./fetch-sections";

const App = () => {
  const [sections, setSections] = React.useState(fetchSections());
  const refsMap = useRefsMap(sections, "id");
  const forceUpdate = useForceUpdate();

  const handleButtonClick = id => {
    refsMap[id].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onClick={() => setSections(fetchSections())}>
            Change sections
          </Button>
          <Button onClick={forceUpdate}>Force a re-render</Button>
        </header>
        <Main>
          <NavBar sections={sections} onButtonClick={handleButtonClick} />
          {sections.map(section => (
            <Section
              ref={refsMap[section.id]}
              key={section.id}
              section={section}
            />
          ))}
        </Main>
      </div>
    </React.StrictMode>
  );
};

export default App;
