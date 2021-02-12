import React from 'react';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import CloseButton from '../../ui/Inputs/CloseButton';
import { H3 } from '../../ui/Typography/Heading';

const Close = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5, minHeight: '50vh' }}>
        <H3>Close button</H3>
        <Box ml={7}>
          <CloseButton />
        </Box>
        <Code language="language-html">{`<CloseButton />`}</Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5, minHeight: '50vh' }}>
        <H3 variant="dark">Close button</H3>
        <Box ml={7}>
          <CloseButton />
        </Box>
        <Code language="language-html">{`<CloseButton />`}</Code>
      </Box>
    </Frame>
  );
};

export default Close;
