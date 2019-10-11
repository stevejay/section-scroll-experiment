import React from "react";
import { Box, Grommet, Tab, Tabs } from "grommet";
import { fetchSections } from "./utils";
import PageHeader from "./PageHeader";
import theme from "./theme";
import GlobalStyle from "./GlobalStyle";
import UsingIDsExample from "./UsingIDsExample";
import UsingMessageExample from "./UsingMessageExample";
import UsingRefsExample from "./UsingRefsExample";

const App = () => {
  const [sections, setSections] = React.useState(fetchSections());

  return (
    <React.StrictMode>
      <GlobalStyle />
      <Grommet full theme={theme}>
        <PageHeader onChangeSections={() => setSections(fetchSections())} />
        <Box as="main" pad="medium">
          <Tabs>
            <Tab title="Using IDs">
              <UsingIDsExample sections={sections} />
            </Tab>
            <Tab title="Using Refs">
              <UsingRefsExample sections={sections} />
            </Tab>
            <Tab title="Using Messages">
              <UsingMessageExample sections={sections} />
            </Tab>
          </Tabs>
        </Box>
      </Grommet>
    </React.StrictMode>
  );
};

export default App;
