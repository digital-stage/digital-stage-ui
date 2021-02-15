import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import Tab from '../../ui/Inputs/Tab';
import { H3 } from '../../ui/Typography/Heading';

const tabs = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5, minHeight: '100vh' }}>
        <H3>Tabs</H3>
        <Box ml={7}>
          <Tab disabled>Disabled</Tab>
          <Tab sx={{ ml: 4 }}>Global</Tab>
        </Box>
        <Code language="language-html">{`<Tab disabled>Disabled</Tab>
<Tab sx={{ ml: 4 }}>Global</Tab>`}</Code>
      </Box>
    </Frame>
  );
};

export default tabs;
