import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { Box, Flex } from 'theme-ui';
import Code from '../../ui/Components/Code';
import Collapse, { CollapseBody, CollapseHeader } from '../../ui/Components/Collapse';
import Frame from '../../ui/Components/Frame';
import GroupDetails from '../../ui/Components/GroupDetails';
import StageDetails from '../../ui/Components/StageDetails';
import { PrimaryButton, SecondaryButton } from '../../ui/Inputs/Button';
import { TertiaryIconButton } from '../../ui/Inputs/IconButton';
import { Regular } from '../../ui/Typography/Body';
import { H3, H4 } from '../../ui/Typography/Heading';

const accordion = () => {
  const [isCollapseOpen, setIsCollapseOpen] = React.useState<boolean>(true);
  const [isCollapseOpen1, setIsCollapseOpen1] = React.useState<boolean>(true);

  return (
    <Frame>
      <Box sx={{ minWidth: '100%', width: '100%', bg: 'gray.4', py: 5 }}>
        <H3>Accordion</H3>
        <Flex
          sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 7 }}
        >
          <Collapse sx={{ width: '80%' }}>
            <CollapseHeader
              isOpen={isCollapseOpen1}
              onClick={() => setIsCollapseOpen1(!isCollapseOpen1)}
            >
              <H4 sx={{ ml: 0 }}>Accordion title</H4>
            </CollapseHeader>
            <CollapseBody isOpen={isCollapseOpen1}>
              <Regular sx={{ ml: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolorem
                aliquam ea pariatur perferendis non illum quasi provident libero!
              </Regular>
            </CollapseBody>
          </Collapse>
        </Flex>
        <Code language="language-javascript">{`const Accordion = () => {
    const [isCollapseOpen, setIsCollapseOpen] = React.useState<boolean>(true);
    return(
        <Collapse sx={{ width: '70%' }}>
            <CollapseHeader
                isOpen={isCollapseOpen}
                onClick={() => setIsCollapseOpen(!isCollapseOpen)}
            >
            <H4 sx={{ ml: 0 }}>Accordion title</H4>
            </CollapseHeader>
            <CollapseBody isOpen={isCollapseOpen1}>
                <Regular sx={{ ml: 0 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Praesentium fugit dolorem aliquam ea pariatur perferendis 
                    non illum quasi provident libero!
                </Regular>
            </CollapseBody>
        </Collapse>
    )
}`}</Code>
        <H3>Groups accordion</H3>
        <Flex
          sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 7 }}
        >
          <Collapse sx={{ width: '80%' }}>
            <CollapseHeader
              isOpen={isCollapseOpen}
              onClick={() => setIsCollapseOpen(!isCollapseOpen)}
            >
              <StageDetails name="Stage name" isMeOwner={true} />
              <Box>
                <TertiaryIconButton>
                  <FiEdit2 />
                </TertiaryIconButton>
                <TertiaryIconButton>
                  <MdDelete />
                </TertiaryIconButton>
              </Box>
            </CollapseHeader>
            <CollapseBody isOpen={isCollapseOpen}>
              <Regular sx={{ ml: 0 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit dolorem
                aliquam ea pariatur perferendis non illum quasi provident libero!
              </Regular>
              <Flex sx={{ justifyContent: 'space-between' }}>
                <GroupDetails name="Group name" />
                <Flex sx={{ justifyContent: 'flex-end' }}>
                  <TertiaryIconButton>
                    <FiEdit2 />
                  </TertiaryIconButton>
                  <TertiaryIconButton>
                    <MdDelete />
                  </TertiaryIconButton>
                  <SecondaryButton>Invite</SecondaryButton>
                  <PrimaryButton>Enter</PrimaryButton>
                </Flex>
              </Flex>
            </CollapseBody>
          </Collapse>
        </Flex>
      </Box>
    </Frame>
  );
};

export default accordion;
