import React from "react";
import { Box, Grommet, Tab, Tabs } from "grommet";
import { fetchSections } from "./utils";
import PageHeader from "./PageHeader";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import UsingIDsExample from "./UsingIDsExample";
import UsingCountersExample from "./UsingCountersExample";
import UsingMessageExample from "./UsingMessageExample";
import UsingRefsExample from "./UsingRefsExample";
import UsingStateExample from "./UsingStateExample";

const EXAMPLES = [
  { title: "Using IDs", component: UsingIDsExample },
  { title: "Using State", component: UsingStateExample },
  { title: "Using Counters", component: UsingCountersExample },
  { title: "Using Refs", component: UsingRefsExample },
  { title: "Using Messages", component: UsingMessageExample }
];

const App = () => {
  const [sections, setSections] = React.useState(() => fetchSections());

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Grommet full theme={theme}>
        <PageHeader onChangeSections={() => setSections(fetchSections())} />
        <Box as="main" pad="medium">
          <Tabs>
            {EXAMPLES.map(({ title, component: Component }) => (
              <Tab key={title} title={title}>
                <Component sections={sections} />
              </Tab>
            ))}
          </Tabs>
        </Box>
      </Grommet>
    </React.StrictMode>
  );
};

export default App;
