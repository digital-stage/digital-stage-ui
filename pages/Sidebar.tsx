import React from 'react';
import { Box, Flex, Image, Link } from 'theme-ui';
import { H4, H6 } from '../ui/Typography/Heading';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '30vw',
        minWidth: '30vw',
        maxHeight: '100vh',
        overflowY: 'scroll',
        '::-webkit-scrollbar': {
          width: '0px',
        },
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          textAlign: 'left',
          ml: 7,
          width: '100%',
        }}
      >
        <Box sx={{ mb: 5 }}>
          <Link
            sx={{
              color: 'text',
            }}
            href="https://github.com/digital-stage/digital-stage-ui"
            target="_blank"
          >
            <Image src="/logo.png" width="180" />
          </Link>
          {/* <H5 sx={{ color: 'secondary', ml: 6 }}>digital-stage-ui</H5> */}
        </Box>
        <H4>Typography</H4>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/heading">
            <H6>Heading</H6>
          </Link>
          <Link href="/components/body">
            <H6>Body</H6>
          </Link>
        </Box>
        <H4>Layout</H4>
        <Box sx={{ ml: 4 }}>
          <H6>Box</H6>
          <H6>Flex</H6>
          <H6>Panel</H6>
        </Box>
        <H4>Inputs</H4>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/button">
            <H6>Button</H6>
          </Link>
          <H6>Close Button</H6>
          <H6>Toggle Icon Button</H6>
          <H6>Function Icon Button</H6>
          <H6>Icon Button</H6>
          <H6>Checkbox</H6>
          <H6>Dropdown</H6>
          <H6>Input</H6>
          <H6>Radio</H6>
          <H6>Tab</H6>
        </Box>
        <H4>Components</H4>
        <Box sx={{ ml: 4 }}>
          <H6>Collapse</H6>
          <H6>Modal</H6>
          <H6>Sidebar</H6>
          <H6>Group details</H6>
          <H6>Stage details</H6>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
