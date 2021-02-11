import React from 'react';
import { Box, Flex } from 'theme-ui';
import { H1, H2, H3, H4, H5, H6 } from '../../ui/Typography/Heading';
import Code from '../../ui/Components/Code';
import Frame from '../../ui/Components/Frame';

const Heading = () => {
  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Typography Headings</H3>
        <H1>Heading h1</H1>
        <H2>Heading h2</H2>
        <H3>Heading h3</H3>
        <H4>Heading h4</H4>
        <H5>Heading h5</H5>
        <H6>Heading h6</H6>
        <Code language="language-html">
          {`<H1>Heading h1</H1>
<H2>Heading h2</H2>
<H3>Heading h3</H3>
<H4>Heading h4</H4>
<H5>Heading h5</H5>
<H6>Heading h6</H6>`}
        </Code>
      </Box>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'text', py: 5 }}>
        <H3 variant="dark">Typography Headings - light background</H3>
        <H1 variant="dark">Heading h1</H1>
        <H2 variant="dark">Heading h2</H2>
        <H3 variant="dark">Heading h3</H3>
        <H4 variant="dark">Heading h4</H4>
        <H5 variant="dark">Heading h5</H5>
        <H6 variant="dark">Heading h6</H6>
        <Code language="language-html">
          {`<H1 variant='dark'>Heading h1</H1>
<H2 variant='dark'>Heading h2</H2>
<H3 variant='dark'>Heading h3</H3>
<H4 variant='dark'>Heading h4</H4>
<H5 variant='dark'>Heading h5</H5>
<H6 variant='dark'>Heading h6</H6>`}
        </Code>
      </Box>
    </Frame>
  );
};

export default Heading;
