import React from 'react';
import { Box, Flex } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { GrayBox, RedBox } from '../../ui/Layout/Box';
import { H3 } from '../../ui/Typography/Heading';

const box = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Box</H3>
        <Box ml={7}></Box>
        <Code language="language-html">{`<Box></Box>`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <Flex ml={7} sx={{ alignContent: 'center', width: '100%', justifyContent: 'center' }}>
          <RedBox sx={{ width: '40vw', height: '40vh' }}></RedBox>
        </Flex>
        <Code language="language-html">{`<RedBox sx={{ width: '40vw', height: '40vh' }}></RedBox>
`}</Code>
        <H3>Gray Box</H3>
        <Flex ml={7} sx={{ alignContent: 'center', width: '100%', justifyContent: 'center' }}>
          <GrayBox sx={{ width: '40vw', height: '40vh' }}></GrayBox>
        </Flex>
        <Code language="language-html">{`<GrayBox sx={{ width: '40vw', height: '40vh' }}></GrayBox>`}</Code>
      </Box>
    </Frame>
  );
};
<H3>Red box</H3>;

export default box;
