import React from 'react';
import Box from '../../ui/Layout/Box';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { H3 } from '../../ui/Typography/Heading';

const flex = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5, minHeight: '100vh' }}>
        <H3>Flex box</H3>
        <Box ml={7}></Box>
        <Code language="language-html">{`<Flex></Flex>`}</Code>
      </Box>
    </Frame>
  );
};

export default flex;
