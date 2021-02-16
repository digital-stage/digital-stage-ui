import React from 'react';
import { Image } from 'theme-ui';
import Collapse, { CollapseBody, CollapseHeader } from '../ui/Components/Collapse';
import Box from '../ui/Layout/Box';
import Flex from '../ui/Layout/Flex';
import { Micro } from '../ui/Typography/Body';
import { H5 } from '../ui/Typography/Heading';
import Link from 'next/link';

const hrStyle = {
  border: '1px solid #393939',
};
const Sidebar = () => {
  const [typographyOpen, setTypographyOpen] = React.useState<boolean>(false);
  const [layoutsOpen, setLayoutsOpen] = React.useState<boolean>(false);
  const [inputsOpen, setInputsOpen] = React.useState<boolean>(false);
  const [componentsOpen, setComponentsOpen] = React.useState<boolean>(false);

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
            href="/"
          >
            <a>
              <Image src="/logo.png" width="180" />
            </a>
          </Link>
        </Box>
        <Collapse>
          <CollapseHeader
            isOpen={typographyOpen}
            onClick={() => setTypographyOpen(!typographyOpen)}
          >
            <H5 sx={{ mb: 3 }}>Typography</H5>
          </CollapseHeader>
          <CollapseBody isOpen={typographyOpen}>
            <Box sx={{ ml: 4 }}>
              <Link href="/components/heading">
                <a>
                  <Micro>Heading</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/body">
                <a>
                  <Micro>Body</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
            </Box>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader isOpen={layoutsOpen} onClick={() => setLayoutsOpen(!layoutsOpen)}>
            <H5 sx={{ mb: 3 }}>Layout</H5>
          </CollapseHeader>
          <CollapseBody isOpen={layoutsOpen}>
            <Box sx={{ ml: 4 }}>
              <Link href="/components/box">
                <a>
                  <Micro>Box</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/flex">
                <a>
                  <Micro>Flex</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/panel">
                <a>
                  <Micro>Panel</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
            </Box>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader isOpen={inputsOpen} onClick={() => setInputsOpen(!inputsOpen)}>
            <H5 sx={{ mb: 3 }}>Inputs</H5>
          </CollapseHeader>
          <CollapseBody isOpen={inputsOpen}>
            <Box sx={{ ml: 4 }}>
              <Link href="/components/button">
                <a>
                  <Micro>Button</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/toggle">
                <a>
                  <Micro>Toggle Icon Button</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/function">
                <a>
                  <Micro>Function Icon Button</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/icon">
                <a>
                  <Micro>Icon Button</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/close">
                <a>
                  <Micro>Close Button</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/checkbox">
                <a>
                  <Micro>Checkbox</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/radio">
                <a>
                  <Micro>Radio</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/dropdown">
                <a>
                  <Micro>Dropdown</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/input">
                <a>
                  <Micro>Input</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/textarea">
                <a>
                  <Micro>Textarea</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
              <Link href="/components/tabs">
                <a>
                  <Micro>Tab</Micro>
                </a>
              </Link>
              <hr style={hrStyle} />
            </Box>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader
            isOpen={componentsOpen}
            onClick={() => setComponentsOpen(!componentsOpen)}
          >
            <H5 sx={{ mb: 3 }}>Components</H5>
          </CollapseHeader>
          <CollapseBody isOpen={componentsOpen}>
            <Box sx={{ ml: 4 }}>
              <Link href="/components/accordion">
                <a>
                  <Micro>Collapse</Micro>
                </a>
                <hr style={hrStyle} />
              </Link>
              <Link href="/components/dialog">
                <a>
                  <Micro>Modal</Micro>
                </a>
                <hr style={hrStyle} />
              </Link>
              <Link href="/components/sidemenu">
                <a>
                  <Micro>Sidebar</Micro>
                </a>
                <hr style={hrStyle} />
              </Link>
            </Box>
          </CollapseBody>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Sidebar;
