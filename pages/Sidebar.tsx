import React from 'react';
import { Image, Link } from 'theme-ui';
import Box from '../ui/Layout/Box';
import Flex from '../ui/Layout/Flex';
import { Micro } from '../ui/Typography/Body';
import { H5 } from '../ui/Typography/Heading';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '25vw',
        minWidth: '25vw',
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
        </Box>
        <H5 sx={{ mb: 3 }}>Typography</H5>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/heading">
            <Micro>Heading</Micro>
          </Link>
          <Link href="/components/body">
            <Micro>Body</Micro>
          </Link>
        </Box>
        <H5 sx={{ mb: 3 }}>Layout</H5>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/box">
            <Micro>Box</Micro>
          </Link>
          <Link href="/components/flex">
            <Micro>Flex</Micro>
          </Link>
          <Link href="/components/panel">
            <Micro>Panel</Micro>
          </Link>
        </Box>
        <H5 sx={{ mb: 3 }}>Inputs</H5>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/button">
            <Micro>Button</Micro>
          </Link>
          <Link href="/components/close">
            <Micro>Close Button</Micro>
          </Link>
          <Link href="/components/toggle">
            <Micro>Toggle Icon Button</Micro>
          </Link>
          <Link href="/components/function">
            <Micro>Function Icon Button</Micro>
          </Link>
          <Link href="/components/icon">
            <Micro>Icon Button</Micro>
          </Link>
          <Link href="/components/checkbox">
            <Micro>Checkbox</Micro>
          </Link>
          <Link href="/components/dropdown">
            <Micro>Dropdown</Micro>
          </Link>
          <Link href="/components/input">
            <Micro>Input</Micro>
          </Link>
          <Link href="/components/radio">
            <Micro>Radio</Micro>
          </Link>
          <Link href="/components/tabs">
            <Micro>Tab</Micro>
          </Link>
        </Box>
        <H5 sx={{ mb: 3 }}>Components</H5>
        <Box sx={{ ml: 4 }}>
          <Link href="/components/accordion">
            <Micro>Collapse</Micro>
          </Link>
          <Link href="/components/dialog">
            <Micro>Modal</Micro>
          </Link>
          <Link href="/components/sidemenu">
            <Micro>Sidebar</Micro>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
