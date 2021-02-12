import React from 'react';
import { Box } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';
import { Micro, Regular } from '../../ui/Typography/Body';
import { H3 } from '../../ui/Typography/Heading';

const Body = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5, minHeight: '50vh' }}>
        <H3>Typography body</H3>
        <Regular>Regular copy</Regular>
        <Micro>Micro copy</Micro>
        <Code language="language-html">
          {`<Regular>Regular copy</Regular>
<Micro>Micro copy</Micro>`}
        </Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5, minHeight: '50vh' }}>
        <H3 variant="dark">Typography body - light background</H3>
        <Regular variant="dark">Regular copy</Regular>
        <Micro variant="dark">Micro copy</Micro>
        <Code language="language-html">
          {`<Regular variant="dark">Regular copy</Regular>
<Micro variant="dark">Micro copy</Micro>`}
        </Code>
      </Box>
    </Frame>
  );
};

export default Body;
