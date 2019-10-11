import React from "react";
import Main from "./Main";
import Section from "./Section";
import SectionNavigation from "./SectionNavigation";
// import { Button } from "./Button";
// import { useForceUpdate } from "./use-force-update";
import useRefsMap from "./use-refs-map";
import fetchSections from "./fetch-sections";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import PageHeading from "./PageHeading";

const App = () => {
  // eslint-disable-next-line
  const [sections, setSections] = React.useState(fetchSections());
  const refsMap = useRefsMap(sections, "id");
  //   const forceUpdate = useForceUpdate();

  const handleButtonClick = id => {
    // refsMap[id].current.scrollIntoView({ behavior: "smooth", block: "start" });

    window.scrollTo(0, refsMap[id].current.offsetTop);
  };

  return (
    <React.StrictMode>
      <GlobalStyle />
      <div>
        <Header>
          <PageHeading>Section Scrolling Example</PageHeading>
        </Header>
        {/* <Button onClick={() => setSections(fetchSections())}>
            Change sections
          </Button>
          <Button onClick={forceUpdate}>Force a re-render</Button> */}
        <Main>
          <SectionNavigation
            sections={sections}
            onButtonClick={handleButtonClick}
          />
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
